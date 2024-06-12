import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../styles/agentRankingChart.css'; // Importamos el archivo de estilos personalizado

const AgentRankingChart = ({ agentData }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current !== null) {
      chartInstance.current.destroy();
    }

    if (agentData.length === 0) return;

    const agentNames = agentData.map(agent => agent.rank);
    const agentScores = agentData.map(agent => agent.value);

    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: agentNames,
        datasets: [{
          label: 'Average Score',
          data: agentScores,
          backgroundColor: 'rgba(54, 162, 235, 0.5)', // Azul claro
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1,
              precision: 0
            }
          }
        }
      }
    });

    return () => {
      if (chartInstance.current !== null) {
        chartInstance.current.destroy();
      }
    };
  }, [agentData]);

  return <canvas className="chart-container" ref={chartRef} />;
};

export default AgentRankingChart;