// src/components/bar/Histogram.js

import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Histogram = ({ items, counts }) => {
  
  // Generar las etiquetas (x) del histograma
  const labels = [0, 1, 1, 3, 3, 5, 5, 10];
 
  // Datos para el histograma
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Número de Respuestas',
        data: [
          { x: 0, y: 48 },
          { x: 1, y: 48 },
          { x: 1, y: 46 },
          { x: 3, y: 46 },
          { x: 3, y: 11 },
          { x: 5, y: 11 },
          { x: 5, y: 5 },
          { x: 10, y: 5 },
        ],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
        barPercentage: 1,
        categoryPercentage: 1,
      },
    ],
  };

  // Opciones para el histograma
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Histograma de Frecuencia',
      },
    },
    scales: {
      x: {       
        title: {
          display: true,
          text: 'Intervalos de Experiencia (Años)',          
        },
        min: 0,  // Asegurar que el eje x comience desde 0
        barPercentage: 0.9,  // Ancho de las barras
        categoryPercentage: 0.6,  // Espaciado de las categorías
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

  return <Bar data={chartData} options={chartOptions} />;
};

export default Histogram;
