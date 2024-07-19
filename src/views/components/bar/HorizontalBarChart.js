import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import '../../../css/Style_grp.css';
import ChartDataLabels from 'chartjs-plugin-datalabels';  // Asegúrate de importar el plugin

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const HorizontalBarChart = ({ counts, questionId }) => {
  // Obtener los datos del gráfico
  const labels = Object.keys(counts);
  const values = Object.values(counts);
  const totalResponses = values.reduce((a, b) => a + b, 0);

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

  // Crear los datos del gráfico
  const data = {
    labels: labels,
    datasets: [{
      label: 'Frecuencia de Respuestas',
      data: values,
      backgroundColor: barColors.slice(0, labels.length),  // Usa los colores disponibles
      borderColor: '#155724',  // Color más oscuro para los bordes
      borderWidth: 1,  // Ancho del borde de las barras
    }],
  };

  // Configuración del gráfico
  const options = {
    indexAxis: 'y',  // Cambiar el eje X e Y para el gráfico horizontal
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `Diagrama de Barras Frecuencia Relativa Porcentual`,
        font: {
          size: 25,
          color: '#ffffff',  // Color blanco para el título
        },
        padding: {
          top: 10,
          bottom: 10,
        },
      },
      legend: {
        display: false,  // No mostrar la leyenda
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            const value = context.raw || 0;
            const percentage = totalResponses > 0 ? ((value / totalResponses) * 100).toFixed(2) : 0;  // Calcular porcentaje correctamente
            return totalResponses > 0 ? `${label}: ${value} (${percentage}%)` : '';  // Mostrar la etiqueta solo si hay datos
          },
        },
        backgroundColor: '#000000',  // Fondo negro para el tooltip
        titleColor: '#ffffff',  // Color blanco para el título del tooltip
        bodyColor: '#ffffff',  // Color blanco para el contenido del tooltip
      },
      datalabels: {
        color: '#ffffff',
        formatter: (value) => {
          const percentage = totalResponses > 0 ? ((value / totalResponses) * 100).toFixed(2) : 0;  // Calcular porcentaje correctamente
          return totalResponses > 0 && value > 0 ? `${percentage}%` : '';  // Mostrar el porcentaje solo si el valor es mayor a 0
        },
        anchor: 'end',  // Coloca los datos al final de las barras
        align: 'end',   // Alinea los datos al final de las barras
        font: {
          size: 14,
          weight: 'bold',
        },
        backgroundColor: '#000000',
        borderRadius: 3,
        padding: 4,
        display: (context) => context.raw > 0,  // Mostrar los porcentajes solo si el valor es mayor a 0
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Frecuencia',
          font: {
            size: 14,
            color: '#ffffff',  // Color blanco para el texto del eje X
          },
        },
        ticks: {
          beginAtZero: true,
          color: '#ffffff',  // Color blanco para los números del eje X
        },
      },
      y: {
        title: {
          display: true,
          text: 'Respuestas',
          font: {
            size: 14,
            color: '#ffffff',  // Color blanco para el texto del eje Y
          },
        },
        ticks: {
          color: '#ffffff',  // Color blanco para los números del eje Y
        },
      },
    },
    // Eliminación del fondo blanco del gráfico
    layout: {
      padding: {
        top: 10,
        bottom: 10,
        left: 10,
        right: 10,
      },
    },
    backgroundColor: 'transparent',  // Eliminar el fondo blanco
  };

  return (
    <div className="graph-container mt-5" style={{ position: 'relative', height: '400px' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default HorizontalBarChart;
