import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const BarChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Total Group Activity',
        data: [90, 180, 130, 170, 140, 140, 130, 132, 113, 129, 122, 146], // Example data
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Total Groups Activity'
      },
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months'
        }
      },
      y: {
        title: {
          display: true,
          text: 'No of Messages'
        },
        beginAtZero: true,
        ticks:{
            stepSize: 25,
        }
      }
    },
    maintainAspectRatio: false
  };

  return (
    <div style={{ width: '400px', height: '300px', margin: 'auto' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
