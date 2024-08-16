import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./RegistryScan.css"; // Import specific styles for Registry Scan

// Register necessary components of Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const RegistryScan = () => {
  // Example data for the charts
  const registryScanData = {
    labels: ["Passed", "Failed"],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ["#4CAF50", "#F44336"],
      },
    ],
  };

  return (
    <div className="registry-scan-container">
      <h2>Registry Scan</h2>
      <div className="registry-scan-chart">
        <Pie data={registryScanData} />
      </div>
      <button className="add-widget-button">Add Widget</button>
    </div>
  );
};

export default RegistryScan;
