import React from "react";
import { Radar } from "react-chartjs-2";

const RadarChart = ({ player, className = "" }) => {
  const data = {
    labels: [
      "Pace",
      "Dribbling",
      "Shooting",
      "Defending",
      "Passing",
      "Physicality",
    ],
    datasets: [
      {
        data: [
          player["Overall"],
          player["Crossing"],
          player["Finishing"],
          player["HeadingAccuracy"],
          player["ShortPassing"],
          player["Volleys"],
        ],
        backgroundColor: "rgba(251, 102, 163, 0.4)",
        borderColor: "rgba(251, 102, 163, 1)",
        pointBackgroundColor: "rgba(251, 102, 163, 0.8)",
        pointBorderWidth: 0,
        pointRadius: 9,
        borderWidth: 3,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        beginAtZero: true,
        min: 0,
        max: 100,
        ticks: {
          major: {
            enabled: true,
          },
          font: {
            size: 12,
          },
          color: "rgba(251, 102, 163, 1)",
        },
        pointLabels: {
          font: {
            size: 12,
          },
          color: "rgba(251, 102, 163, 1)",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Radar data={data} options={options} className={className} />;
};

export default RadarChart;
