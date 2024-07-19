// src/components/line/PuntoEquilibrioChart.js

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

  // Método para encontrar el punto de equilibrio
  const findEquilibriumPoint = (labels, menorData, mayorData) => {
    for (let i = 0; i < labels.length - 1; i++) {
      if (menorData[i] === mayorData[i]) {
        return { x: labels[i], y: menorData[i] };
      }

      if ((menorData[i] < mayorData[i] && menorData[i + 1] > mayorData[i + 1]) ||
          (menorData[i] > mayorData[i] && menorData[i + 1] < mayorData[i + 1])) {
        // Interpolación lineal
        const x1 = parseFloat(labels[i]);
        const x2 = parseFloat(labels[i + 1]);
        const y1Menor = menorData[i];
        const y2Menor = menorData[i + 1];
        const y1Mayor = mayorData[i];
        const y2Mayor = mayorData[i + 1];

        const slopeMenor = (y2Menor - y1Menor) / (x2 - x1);
        const slopeMayor = (y2Mayor - y1Mayor) / (x2 - x1);

        const equilibriumX = x1 + (y1Mayor - y1Menor) / (slopeMenor - slopeMayor);
        const equilibriumY = y1Menor + slopeMenor * (equilibriumX - x1);

        return { x: equilibriumX, y: equilibriumY };
      }
    }
    return null;
  };

  const equilibriumPoint = findEquilibriumPoint(labels, menorData, mayorData);

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
        text: `Punto de Equilibrio`,
        font: {
          size: 25,
          color: '#ffffff',  // Color blanco para el título
        },
      },
      annotation: {
        annotations: equilibriumPoint ? {
          point1: {
            type: 'line',
            scaleID: 'x',
            value: equilibriumPoint.x,
            borderColor: 'red',
            borderWidth: 2,
            label: {
              content: `x: ${parseFloat(equilibriumPoint.x).toFixed(2)}`,
              enabled: true,
              position: 'start',
            },
          },
          point2: {
            type: 'line',
            scaleID: 'y',
            value: equilibriumPoint.y,
            borderColor: 'red',
            borderWidth: 2,
            label: {
              content: `y: ${parseFloat(equilibriumPoint.y).toFixed(2)}`,
              enabled: true,
              position: 'start',
            },
          },
          equilibriumPoint: {
            type: 'point',
            xValue: parseFloat(equilibriumPoint.x),
            yValue: equilibriumPoint.y,
            backgroundColor: 'red',
            radius: 5,
          },
        } : {},
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

  return (
    <div className="graph-container mt-5" style={{ height: '400px', width:'800px' }}>
    <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default PuntoEquilibrioChart;
