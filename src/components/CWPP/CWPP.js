import React from "react";
import "./CWPP.css";

const CWPP = () => {
  return (
    <div className="dashboard">
      <h2>CWPP Dashboard</h2>
      <div className="dashboard-row">
        <div className="dashboard-card">
          <h3>Top 5 Namespace Specific Alerts</h3>
          <div className="dashboard-card-content">
            <p>No Graph data available</p>
            <div className="add-widget">
              <button>Add Widget</button>
            </div>
          </div>
        </div>

        <div className="dashboard-card">
          <h3>Workload Alerts</h3>
          <div className="dashboard-card-content">
            <p>No Graph data available</p>
            <div className="add-widget">
              <button>Add Widget</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CWPP;
