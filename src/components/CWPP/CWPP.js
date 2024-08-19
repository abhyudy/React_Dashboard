import React from "react";
import "./CWPP.css"; // Import specific styles for CWPP

const CWPP = () => {
  return (
    <>
      <div className="nametitle">
        <h2>CWPP Dashboard</h2>
        <div className="cwpp-dashboard">
          <div className="row">
            <div className="col-md-4">
              <div className="cwpp-title">Top 5 Namespace Specific Alerts</div>
              <div className="cwpp-content">
                <i className="fa-sharp fa-solid fa-chart-mixed graph-placeholder"></i>
                <p>No graph data available</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="cwpp-title">Workload Alerts</div>
              <div className="cwpp-content">
                <i className="fa-sharp fa-solid fa-chart-mixed graph-placeholder"></i>
                <p>No graph data available</p>
              </div>
            </div>
          </div>

          <div className="cwpp-add-widget">
            <button className="add-widget-button">Add Widget</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CWPP;
