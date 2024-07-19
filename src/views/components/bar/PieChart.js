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
        text: `Diagrama Circular`,
        font: {
          size: 25,
          color: '#ffffff',
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
        color: '#000',  // Color del texto de los porcentajes
        formatter: (value, context) => {
          const percentage = ((value / total) * 100).toFixed(2);
          return `${percentage}%`;
        },
        display: true,
        anchor: 'end',  // Ancla los datos en el borde del gráfico
        align: 'start',  // Alinea los datos al inicio
        font: {
          size: 12,
          weight: 'bold',
        },
        backgroundColor: '#ffffff',
        borderRadius: 3,
        padding: 4,
        borderColor: '#000',
        borderWidth: 1,
      },
    },
    elements: {
      arc: {
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 10,
        shadowColor: 'rgba(0,0,0,0.3)',  // Color de la sombra
        shadowBlur: 10,  // Difuminado de la sombra
        shadowOffsetX: 4,  // Desplazamiento horizontal de la sombra
        shadowOffsetY: 4,  // Desplazamiento vertical de la sombra
      },
    },
    layout: {
      padding: {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20,
      },
    },
  };

  return (
    <div className="graph-container mt-5 text-center" style={{ maxWidth: '700px', margin: 'auto' }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
