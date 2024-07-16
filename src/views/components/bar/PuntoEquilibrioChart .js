import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin
);

const PuntoEquilibrioChart = ({ countsMenor = {}, countsMayor = {}, questionId }) => {
  const labels = Object.keys(countsMenor);
  const menorData = Object.values(countsMenor);
  const mayorData = Object.values(countsMayor);
  const equilibriumPoint = labels.findIndex((label, i) => menorData[i] === mayorData[i]);
  
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Acumulada Menor',
        data: menorData,
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
        tension: 0.4,
      },
      {
        label: 'Acumulada Mayor',
        data: mayorData,
        borderColor: 'rgba(255, 99, 132, 1)',
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Punto de Equilibrio en P${questionId}`,
      },
      annotation: {
        annotations: {
          point1: {
            type: 'line',
            scaleID: 'x',
            value: labels[equilibriumPoint],
            borderColor: 'red',
            borderWidth: 2,
          },
          point2: {
            type: 'line',
            scaleID: 'y',
            value: menorData[equilibriumPoint],
            borderColor: 'red',
            borderWidth: 2,
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          borderDash: [3, 3],
        },
      },
    },
  };

  return <Line data={chartData} options={chartOptions} />;
};

export default PuntoEquilibrioChart;
