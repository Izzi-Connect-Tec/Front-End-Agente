import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../styles/charts.css'; 

const Charts = ({ agentData, durationData }) => {
  const agentChartRef = useRef(null);
  const durationChartRef = useRef(null);
  const agentChartInstance = useRef(null);
  const durationChartInstance = useRef(null);

  useEffect(() => {
    if (agentChartInstance.current !== null) {
      agentChartInstance.current.destroy();
    }
    if (durationChartInstance.current !== null) {
      durationChartInstance.current.destroy();
    }

    if (agentData.length > 0) {
      const agentNames = agentData.map(agent => agent.rank);
      const agentScores = agentData.map(agent => agent.value);

      const ctx = agentChartRef.current.getContext('2d');
      agentChartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: agentNames,
          datasets: [{
            label: 'Calificación promedio',
            data: agentScores,
            backgroundColor: 'rgba(54, 162, 235, 0.5)', 
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
    }

    if (durationData.length > 0) {
      const months = durationData.map(item => item.month);
      const durations = durationData.map(item => item.duration);

      const ctx = durationChartRef.current.getContext('2d');
      durationChartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: months,
          datasets: [{
            label: 'Promedio de duración de llamadas (minutos)',
            data: durations,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            fill: true,
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
    }

    return () => {
      if (agentChartInstance.current !== null) {
        agentChartInstance.current.destroy();
      }
      if (durationChartInstance.current !== null) {
        durationChartInstance.current.destroy();
      }
    };
  }, [agentData, durationData]);

  return (
    <div className="charts-container">
      <canvas className="chart" ref={agentChartRef} />
      <canvas className="chart" ref={durationChartRef} />
    </div>
  );
};

export default Charts;