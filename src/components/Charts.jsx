/* Author: Giovanna Lorena Delgado Mendoza*/
/*Rating window graphs showing agent statistics*/

import { useState, useEffect } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";
import "../styles/charts.css";


const Charts = () => {

  let agent = JSON.parse(window.localStorage.getItem('Agent'));

  const date = new Date();

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  //Dummies
  const defaultDurationData = [
    { month: "January", duration: 5 },
    { month: "February", duration: 6 },
    { month: "March", duration: 7 },
    { month: "April", duration: 5 },
    { month: "May", duration: 6 },
  ];

  const defaultAgentData = [
    { agente: "Agustín Ríos", value: 4.5 },
    { agente: "Lara Díaz", value: 3.8 },
    { agente: "Juan Ortíz", value: 4.2 },
    { agente: "Karla Lara", value: 4.9 },
    { agente: "Diana Fuentes", value: 4.1 },
  ];

  const [durationData, setDurationData] = useState(defaultDurationData);
  const [agentData, setAgentData] = useState(defaultAgentData);

  useEffect(() => {
    const fetchDurationData = async () => {
      try {

        let config = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            Authorization: `Bearer ${agent.Token}`,
          }
        }

        const res = await fetch(
          `http://44.209.22.101:8080/empleado/duracionPromMeses/${agent.IdEmpleado}`, config
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();

        // Convert AvgDuration from milliseconds to minutes
        const formattedData = data.map((item) => ({
          ...item,
          AvgDuration: parseFloat(item.AvgDuration) / 60, // Convert to minutes
        }));

        setDurationData(formattedData);
      } catch (error) {
        console.error("Error fetching agent data for agent data:", error);
      }
    };

    const fetchAgentData = async () => {
      try {
        const response = await fetch(
          `http://44.209.22.101:8080/empleado/getCalifPromDiaAgentes/${formattedDate}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Agent data:", data);
        setAgentData(data); // Asign formated data to the API
      } catch (error) {
        console.error("Error fetching agent data for agent data:", error);
      }
    };

    fetchAgentData();
    fetchDurationData();
  }, [agent.IdEmpleado, formattedDate, agent.Token]);

  const colors = {
    tertiary: "rgba(255, 206, 0, 0.8)",
    quaternary: "rgba(236, 105, 7, 0.8)",
  };

  const agentChartSetting = {
    yAxis: [{ label: "Average Rating" }],
    series: [
      { dataKey: "value", label: "Calificación", color: colors.quaternary },
    ],
    height: 300,
  };

  const durationChartSetting = {
    yAxis: [{ label: "Average duration in call (minutes)" }],
    series: [
      { dataKey: "AvgDuration", label: "Duration", color: colors.tertiary },
    ],
    height: 300,
  };

  return (
    <div className="chartsContainer">
      <div className="chartWrapper">
        <LineChart
          dataset={durationData}
          xAxis={[{ scaleType: "band", dataKey: "Month" }]}
          {...durationChartSetting}
        />
      </div>
      <div className="chartWrapper">
        <BarChart
          dataset={agentData}
          xAxis={[
            {
              scaleType: "band",
              dataKey: "agente",
              tick: { angle: -45, textAnchor: "end" },
            },
          ]}
          margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
          {...agentChartSetting}
        />
      </div>
    </div>
  );
};

export default Charts;
