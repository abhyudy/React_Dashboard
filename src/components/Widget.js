import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function Widget({ widgetData }) {
  console.log("Widget data:", widgetData); // Debugging line
  const { type, data = [] } = widgetData; // Default data to an empty array if undefined

  const chartData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => item.value),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#E2E2E2"],
      },
    ],
  };

  switch (type) {
    case "pie":
      return (
        <div>
          <h3>{widgetData.name}</h3>
          <Pie data={chartData} />
        </div>
      );
    case "blank":
      return <div>{widgetData.name}</div>;
    default:
      return <div>Unknown widget type</div>;
  }
}

export default Widget;
