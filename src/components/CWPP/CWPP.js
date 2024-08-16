import React from "react";
import "./CWPP.css"; // Import specific styles for CWPP

const CWPP = () => {
  return (
    <div className="cwpp-dashboard">
      <div className="row">
        <div className="col-md-4">
          <div className="cwpp-title">Top 5 Namespace Specific Alerts</div>
          <div className="cwpp-content">
            <p>No graph data available</p>
            <img
              src="path-to-graph-font-image.png"
              alt="Graph Placeholder"
              className="graph-placeholder"
            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="cwpp-title">Workload Alerts</div>
          <div className="cwpp-content">
            <p>No graph data available</p>
            <img
              src="path-to-graph-font-image.png"
              alt="Graph Placeholder"
              className="graph-placeholder"
            />
          </div>
        </div>
      </div>

      <div className="cwpp-add-widget">
        <button className="add-widget-button">Add Widget</button>
      </div>
    </div>
  );
};

export default CWPP;
