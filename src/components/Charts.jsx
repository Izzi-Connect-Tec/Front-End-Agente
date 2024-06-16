/* Autora: Giovanna Lorena Delgado Mendoza*/
/*Gráficas de la ventana de calificación que muestra estadísticas de los agentes*/
import { useState, useEffect } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import '../styles/charts.css';
import { useLogInContext } from '../Providers/LogInContext';

const Charts = () => {

  const [agent,,] = useLogInContext();

  const date = new Date();

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  //Dummies
  const defaultDurationData = [
    { month: 'Enero', duration: 5 },
    { month: 'Febrero', duration: 6 },
    { month: 'Marzo', duration: 7 },
    { month: 'Abril', duration: 5 },
    { month: 'Mayo', duration: 6 },
  ];

  const defaultAgentData = [
    { agente: 'Agustín Ríos', value: 4.5 },
    { agente: 'Lara Díaz', value: 3.8 },
    { agente: 'Juan Ortíz', value: 4.2 },
    { agente: 'Karla Lara', value: 4.9 },
    { agente: 'Diana Fuentes', value: 4.1 },
  ];

  const [durationData, setDurationData] = useState(defaultDurationData);
  const [agentData, setAgentData] = useState(defaultAgentData);

  useEffect(() => {
    const fetchDurationData = async () => {
      try{
        const res = await fetch(`http://localhost:8080/empleado/duracionPromMeses/${agent.IdEmpleado}`)
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();

         // Convertir AvgDuration de milisegundos a minutos
         const formattedData = data.map(item => ({
          ...item,
          AvgDuration: parseFloat(item.AvgDuration) / 60 // Convertir a minutos
        }));

        setDurationData(formattedData);
      } catch (error){
        console.error('Error fetching agent data for agent data:', error);
      }

    };

    const fetchAgentData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/empleado/getCalifPromDiaAgentes/${formattedDate}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Agent data:', data);
        setAgentData(data); // Asigna los datos formateados de la API
      } catch (error) {
        console.error('Error fetching agent data for agent data:', error);
      }
    };

    fetchAgentData();
    fetchDurationData();
  }, []);

  const colors = {
    tertiary: 'rgba(255, 206, 0, 0.8)',
    quaternary: 'rgba(236, 105, 7, 0.8)',
  };

  const agentChartSetting = {
    yAxis: [{ label: 'Calificación Promedio' }],
    series: [{ dataKey: 'value', label: 'Calificación', color: colors.quaternary }],
    height: 300,
  };

  const durationChartSetting = {
    yAxis: [{ label: 'Average duration in call (minutes)' }],
    series: [{ dataKey: 'AvgDuration', label: 'Duration', color: colors.tertiary }],
    height: 300
  };

  return (
    <div className="charts-container">
      <div className="chart-wrapper">
        <LineChart
          dataset={durationData}
          xAxis={[{ scaleType: 'band', dataKey: 'Month' }]}
          {...durationChartSetting}
        />
      </div>
      <div className="chart-wrapper">
        <BarChart
          dataset={agentData}
          xAxis={[{ scaleType: 'band', dataKey: 'agente', tick: { angle: -45, textAnchor: 'end' } }]}
          margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
          {...agentChartSetting}
        />
      </div>
    </div>
  );
};

export default Charts;