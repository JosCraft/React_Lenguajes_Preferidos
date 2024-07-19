import React from 'react';
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import '../../../css/Style_grp.css';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DobleEntradaChart = ({ data }) => {
  const { x, y, z } = data;

  // Define colors for each IDE
  const colors = {
    'VisualStudioCode': 'rgba(54, 162, 235, 0.5)', // Blue
    'Otro': 'rgba(255, 99, 132, 0.5)', // Red
    'Eclipse': 'rgba(75, 192, 192, 0.5)', // Green
    'PyCharm': 'rgba(153, 102, 255, 0.5)', // Purple
    'IntelliJ IDEA': 'rgba(255, 159, 64, 0.5)' // Orange
  };

  const chartData = {
    labels: x,
    datasets: y.map((ide, index) => ({
      label: ide,
      data: z.map(row => row[index]),
      backgroundColor: colors[ide] || 'rgba(200, 200, 200, 0.5)', // Default color if IDE not found
      borderColor: colors[ide] || 'rgba(200, 200, 200, 1)', // Default border color if IDE not found
      borderWidth: 1
    }))
  };

  return (
    <div className='dobleEG'>
      <h3>Gráfico de Doble Entrada</h3>
      <Chart
        type='bar'
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              callbacks: {
                label: function(tooltipItem) {
                  return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                }
              }
            }
          },
          layout: {
            padding: 20
          },
          elements: {
            bar: {
              borderWidth: 2
            }
          }
        }}
      />
    </div>
  );
};

export default DobleEntradaChart;
