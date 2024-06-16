import { useState, useEffect } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import '../styles/charts.css';

const Charts = () => {
  //d
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
      await new Promise(resolve => setTimeout(resolve, 1000));
      setDurationData(defaultDurationData);
    };

    const fetchAgentData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setAgentData(defaultAgentData); 
    };

    fetchDurationData();
    fetchAgentData();
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
    yAxis: [{ label: 'Promedio de Duración (minutos)' }],
    series: [{ dataKey: 'duration', label: 'Duración', color: colors.tertiary }],
    height: 300,
  };

  return (
    <div className="charts-container">
      <div className="chart-wrapper">
        <LineChart
          dataset={durationData}
          xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
          {...durationChartSetting}
        />
      </div>
      <div className="chart-wrapper">
        <BarChart
          dataset={agentData}
          xAxis={[{ scaleType: 'band', dataKey: 'agente' }]}
          {...agentChartSetting}
        />
      </div>
    </div>
  );
};

export default Charts;