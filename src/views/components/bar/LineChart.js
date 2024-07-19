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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ counts, questionId,name }) => {
  // Calculate total responses for the question
  const totalResponses = Object.values(counts).reduce((acc, count) => acc + count, 0);

  // Calculate relative frequency (fi)
  const relativeFrequency = {};
  for (const [option, count] of Object.entries(counts)) {
    relativeFrequency[option] = ((count / totalResponses) * 100).toFixed(2);
  }

  // Data for Line Chart
  const chartData = {
    labels: Object.keys(counts),
    datasets: [
      {
        label: 'Conteo',
        data: Object.values(counts),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        fill: false,
        tension: 0.4, // Smoothing the line
      },
    ],
  };

  // Options for Line Chart
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Ojiva de las Frecuencias ${name}`,
        font: {
          size: 25,
          color: '#ffffff',  // Color blanco para el título
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

  return (
    <div className="graph-container mt-5" style={{ height: '400px', width:'800px' }}>
      <Line data={chartData} options={chartOptions} />
    </div>
    );
};

export default LineChart;
