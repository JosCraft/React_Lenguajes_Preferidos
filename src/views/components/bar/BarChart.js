import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import '../../../css/Style_grp.css'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ counts, questionId }) => {
  const data = {
    labels: Object.keys(counts),
    datasets: [{
      label: 'Frecuencia de Respuestas',
      data: Object.values(counts),
      backgroundColor: '#007bff',  // Color del gráfico
    }],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: `Frecuencia de Respuestas para la Pregunta ${questionId}`,
      },
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            const value = context.raw || 0;
            const percentage = ((value / Object.values(counts).reduce((a, b) => a + b, 0)) * 100).toFixed(2);
            return `${label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Respuestas',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Frecuencia',
        },
      },
    },
  };

  return (
    <div className="graph-container mt-5" style={{ position: 'relative', height: '400px' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
