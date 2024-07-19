// src/components/bar/AreaChart.js

import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

const AreaChart = ({ items, counts }) => {
  // Preparar los datos para el gráfico de área
  const labels = items;  // Usar los valores finales del intervalo como etiquetas del eje X
  const dataCounts = items.map(item => counts[item] || 0);  // Extrae las frecuencias de los valores finales del intervalo

  // Datos para el gráfico de área
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Número de Respuestas',
        data: dataCounts,
        fill: true,  // Llenar el área bajo la línea
        backgroundColor: 'rgba(75, 192, 192, 0.6)',  // Color de fondo del área
        borderColor: 'rgba(75, 192, 192, 1)',  // Color del borde de la línea
        borderWidth: 1,
        tension: 0,  // Línea recta sin curva
      },
    ],
  };

  // Opciones para el gráfico de área
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Gráfico de Área de Respuestas',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Intervalos de Experiencia (Años)',
        },
        // Ajustar el espacio entre las barras
        ticks: {
          autoSkip: false,  // Asegura que todas las etiquetas se muestren
        },
        // Ajuste de escala para el efecto de histograma
        grid: {
          display: false,  // Opcional: Ocultar la cuadrícula del eje x
        },
      },
      y: {
        title: {
          display: true,
          text: 'Número de Respuestas',
        },
        beginAtZero: true,
        ticks: {
          stepSize: 1,  // Ajusta el tamaño del paso en el eje y para una visualización más clara
        },
        // Ajuste de escala para el efecto de histograma
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',  // Color de la cuadrícula del eje y
        },
      },
    },
  };

  return <Line data={chartData} options={chartOptions} />;
};

export default AreaChart;
