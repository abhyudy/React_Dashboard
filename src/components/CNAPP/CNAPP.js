import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./CNAPP.css";

// Register necessary components of Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

function CNAPP() {
  // Initial dashboard state
  const initialData = {
    categories: [
      {
        name: "CSPM Executive Dashboard",
        widgets: [
          {
            name: "Cloud Accounts",
            type: "pie",
            data: [
              { label: "Connected", value: 2 },
              { label: "Not Connected", value: 2 },
            ],
          },
          {
            name: "Cloud Account Risk Assessment",
            type: "pie",
            data: [
              { label: "Failed", value: 1689 },
              { label: "Warning", value: 881 },
              { label: "Not available", value: 36 },
              { label: "Passed", value: 7253 },
            ],
          },
        ],
      },
    ],
  };

  const [dashboardData, setDashboardData] = useState(initialData);
  const [newWidget, setNewWidget] = useState({
    name: "",
    type: "blank",
    data: [],
  });

  // Add a widget
  const handleAddWidget = () => {
    const updatedCategories = [...dashboardData.categories];
    updatedCategories[0].widgets.push(newWidget);
    setDashboardData({ categories: updatedCategories });
    setNewWidget({ name: "", type: "blank", data: [] }); // Reset form
  };

  // Remove a widget
  const handleRemoveWidget = (widgetIndex) => {
    const updatedCategories = [...dashboardData.categories];
    updatedCategories[0].widgets.splice(widgetIndex, 1);
    setDashboardData({ categories: updatedCategories });
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewWidget((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container">
      <h1>CNAPP Dashboard</h1>
      <h2>{dashboardData.categories[0].name}</h2>
      <div className="row">
        {dashboardData.categories[0].widgets.map((widget, index) => (
          <div className="col-md-4" key={index}>
            <h3>{widget.name}</h3>
            {widget.type === "pie" && (
              <div className="circle-chart">
                <Pie
                  data={{
                    labels: widget.data.map((d) => d.label),
                    datasets: [
                      {
                        data: widget.data.map((d) => d.value),
                        backgroundColor: [
                          "#FF6384",
                          "#36A2EB",
                          "#FFCE56",
                          "#E2E2E2",
                        ],
                      },
                    ],
                  }}
                />
              </div>
            )}
            <button onClick={() => handleRemoveWidget(index)}>
              Remove Widget
            </button>
          </div>
        ))}
        <div className="col-md-4">
          <h3>Add Widget</h3>
          <input
            type="text"
            name="name"
            placeholder="Widget Name"
            value={newWidget.name}
            onChange={handleInputChange}
          />
          <textarea
            name="data"
            placeholder="Widget Data (JSON)"
            value={JSON.stringify(newWidget.data)}
            onChange={(e) =>
              handleInputChange({
                target: { name: "data", value: JSON.parse(e.target.value) },
              })
            }
          />
          <button onClick={handleAddWidget}>Add Widget</button>
        </div>
      </div>
    </div>
  );
}

export default CNAPP;
