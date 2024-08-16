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
        id: 1,
        name: "CSPM Executive Dashboard",
        widgets: [
          {
            id: 1,
            name: "Cloud Accounts",
            type: "pie",
            data: [
              { label: "Connected", value: 2 },
              { label: "Not Connected", value: 2 },
            ],
          },
          {
            id: 2,
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
    type: "pie",
    data: [],
  });

  // Add a widget
  const handleAddWidget = () => {
    if (newWidget.name && newWidget.data.length > 0) {
      const updatedCategories = [...dashboardData.categories];
      const newWidgetId = Math.random();
      updatedCategories[0].widgets.push({
        id: newWidgetId,
        ...newWidget,
      });
      setDashboardData({ categories: updatedCategories });
      setNewWidget({ name: "", type: "pie", data: [] }); // Reset form
    }
  };

  // Remove a widget
  const handleRemoveWidget = (widgetId) => {
    const updatedCategories = dashboardData.categories.map((category) => {
      return {
        ...category,
        widgets: category.widgets.filter((widget) => widget.id !== widgetId),
      };
    });
    setDashboardData({ categories: updatedCategories });
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewWidget((prev) => ({ ...prev, [name]: value }));
  };

  // Handle JSON data input for the widget
  const handleDataInputChange = (e) => {
    try {
      const parsedData = JSON.parse(e.target.value);
      setNewWidget((prev) => ({ ...prev, data: parsedData }));
    } catch (err) {
      console.error("Invalid JSON input");
    }
  };

  return (
    <div className="container">
      <h1>CNAPP Dashboard</h1>
      <h2>{dashboardData.categories[0].name}</h2>
      <div className="row">
        {dashboardData.categories[0].widgets.map((widget) => (
          <div className="col-md-4" key={widget.id}>
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
            <button onClick={() => handleRemoveWidget(widget.id)}>
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
            placeholder='Widget Data (JSON format: [{"label": "Connected", "value": 2}])'
            value={JSON.stringify(newWidget.data)}
            onChange={handleDataInputChange}
          />
          <button onClick={handleAddWidget}>Add Widget</button>
        </div>
      </div>
    </div>
  );
}

export default CNAPP;
