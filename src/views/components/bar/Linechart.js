// src/components/line/LineChart.js

import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Linechart = ({ items, counts }) => {
  
  // Generar las etiquetas (x) del gráfico de líneas
  const labels = [0, 1, 3, 5, 10];
 
  // Datos para el gráfico de líneas
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Número de Respuestas',
        data: [48, 46, 11,5], // Datos correspondientes a los intervalos
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false,
        tension: 0.1,
        pointRadius: 5,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  // Opciones para el gráfico de líneas
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Poligono de Frecuencia',
      },
    },
    scales: {
      x: {       
        title: {
          display: true,
          text: 'Intervalos de Experiencia (Años)',          
        },
        min: 0,  // Asegurar que el eje x comience desde 0
        grid: {
          display: false,  // Ocultar la cuadrícula del eje x
        },
        ticks: {
          autoSkip: false,  // Asegura que todas las etiquetas se muestren
        },
      },
      y: {
        title: {
          display: true,
          text: 'Número de Respuestas',
        },
        beginAtZero: true,
      },
    },
  };

  return <Line data={chartData} options={chartOptions} />;
};

export default Linechart;
