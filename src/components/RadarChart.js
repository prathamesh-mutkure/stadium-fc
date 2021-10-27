import React from "react";
import { Radar } from "react-chartjs-2";
import { ChartOptions } from "chart.js";

const RadarChart = ({ player }) => {
  const data = {
    type: "radar",
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
      },
    ],
  };

  const options = {
    scales: {
      r: {
        beginAtZero: true,
        min: 0,
        max: 100,
        stepSize: 20,
      },
    },
  };

  return (
    <div>
      <h1>Radar</h1>
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;
