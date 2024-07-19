import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import '../../../css/Style_grp.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ counts, questionId, name }) => {
  // Colores para las barras
  const barColors = [
    '#007bff',  // Azul
    '#28a745',  // Verde
    '#dc3545',  // Rojo
    '#ffc107',  // Amarillo
    '#6c757d',  // Gris
    '#17a2b8',  // Cian
    '#fd7e14',  // Naranja
    '#6610f2',  // Violeta
    '#e83e8c',  // Rosa
    '#20c997',  // Verde menta
  ];

  const data = {
    labels: Object.keys(counts),
    datasets: [{
      label: 'Frecuencia de Respuestas',
      data: Object.values(counts),
      backgroundColor: barColors.slice(0, Object.keys(counts).length),  // Usa los colores disponibles
    }],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: `Diagrama de Barras de Frecuencia ${name}`,
        font: {
          size: 25,
          color: '#ffffff',  // Color blanco para el título
        },
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
