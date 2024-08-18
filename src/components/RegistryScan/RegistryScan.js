import React from "react";
import "./RegistryScan.css"; // Import specific styles for Registry Scan

const RegistryScan = () => {
  return (
    <div className="registry-scan-dashboard">
      <div className="registry-scan-section">
        <div className="registry-scan-title">Image Risk Assessment</div>
        <div className="registry-scan-content">
          <p>No graph data available</p>
          <img
            src="path-to-graph-font-image.png"
            alt="Graph Placeholder"
            className="graph-placeholder"
          />
        </div>
      </div>

      <div className="registry-scan-section">
        <div className="registry-scan-title">Image Security Issues</div>
        <div className="registry-scan-content">
          <p>No graph data available</p>
          <img
            src="path-to-graph-font-image.png"
            alt="Graph Placeholder"
            className="graph-placeholder"
          />
        </div>
      </div>

      <div className="registry-scan-add-widget">
        <button className="add-widget-button">Add Widget</button>
      </div>
    </div>
  );
};

export default RegistryScan;
