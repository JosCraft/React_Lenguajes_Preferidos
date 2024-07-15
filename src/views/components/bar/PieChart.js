import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels);

const PieChart = ({ counts, questionId }) => {
  const total = Object.values(counts).reduce((a, b) => a + b, 0);

  // Datos del gráfico
  const data = {
    labels: Object.keys(counts),
    datasets: [{
      label: 'Distribución de Respuestas',
      data: Object.values(counts),
      backgroundColor: ['#007bff', '#28a745', '#dc3545', '#ffc107', '#6c757d'],
      borderColor: '#fff',
      borderWidth: 2,
      hoverOffset: 10,  // Desplazamiento del segmento al pasar el ratón
    }],
  };

  // Opciones del gráfico
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `Distribución de Respuestas para la Pregunta ${questionId}`,
        font: {
          size: 18,
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
            const percentage = ((value / total) * 100).toFixed(2);
            return `${label}: ${value} (${percentage}%)`;
          },
        },
      },
      datalabels: {
        color: '#fff',
        formatter: (value, context) => {
          const percentage = ((value / total) * 100).toFixed(2);
          return `${percentage}%`;
        },
        display: true,
        anchor: 'center',  // Centra los datos en el gráfico
        align: 'center',  // Alinea los datos en el centro
        font: {
          size: 14,
          weight: 'bold',
        },
        backgroundColor: '#000000',
        borderRadius: 3,
        padding: 4,
      },
    },
    // Efecto 3D
    elements: {
      arc: {
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 10,
        backgroundColor: '#007bff',
        shadowColor: 'rgba(0,0,0,0.3)',  // Color de la sombra
        shadowBlur: 10,  // Difuminado de la sombra
        shadowOffsetX: 4,  // Desplazamiento horizontal de la sombra
        shadowOffsetY: 4,  // Desplazamiento vertical de la sombra
      },
    },
  };

  return (
    <div className="graph-container mt-5 text-center">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
