import React, { useState } from "react";
import Widget from "./Widget"; // Adjust the path if necessary

const initialData = {
  categories: [
    {
      name: "CNAPP Dashboard",
      widgets: [
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
        {
          name: "Add Widget",
          type: "blank",
        },
      ],
    },
  ],
};

function Dashboard() {
  const [dashboardData, setDashboardData] = useState(initialData);

  const handleAddWidget = (categoryIndex) => {
    // Logic to add a widget to the specified category
  };

  return (
    <div>
      {dashboardData.categories.map((category, index) => (
        <div key={index}>
          <h2>{category.name}</h2>
          <div>
            {category.widgets.map((widget, widgetIndex) => (
              <Widget key={widgetIndex} widgetData={widget} />
            ))}
          </div>
          <button onClick={() => handleAddWidget(index)}>Add Widget</button>
        </div>
      ))}
      {/* Add Category section */}
    </div>
  );
}

export default Dashboard;
