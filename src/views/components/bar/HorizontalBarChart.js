import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import '../../../css/Style_grp.css'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const HorizontalBarChart = ({ counts, questionId }) => {
  // Preparar los datos para el gráfico
  const data = {
    labels: Object.keys(counts),
    datasets: [{
      label: 'Frecuencia de Respuestas',
      data: Object.values(counts),
      backgroundColor: '#28a745',  // Color verde para las barras
      borderColor: '#155724',    // Color más oscuro para los bordes
      borderWidth: 1,            // Ancho del borde de las barras
    }],
  };

  // Configuración del gráfico
  const options = {
    indexAxis: 'y',  // Cambiar el eje X e Y para el gráfico horizontal
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `Frecuencia de Respuestas para la Pregunta ${questionId}`,
        font: {
          size: 18,
        },
        padding: {
          top: 10,
          bottom: 10,
        },
      },
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14,
          },
        },
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
          text: 'Frecuencia',
          font: {
            size: 14,
          },
        },
        ticks: {
          beginAtZero: true,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Respuestas',
          font: {
            size: 14,
          },
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

export default HorizontalBarChart;
