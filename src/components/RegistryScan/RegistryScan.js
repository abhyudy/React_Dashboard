import React from "react";
import "./RegistryScan.css";

const RegistryScan = () => {
  return (
    <div className="dashboard">
      <h2>Registry Scan</h2>
      <div className="dashboard-row">
        <div className="dashboard-card">
          <h3>Image Risk Assessment</h3>
          <div className="dashboard-card-content">
            <div className="progress-bar">
              <div
                className="progress-bar-fill critical"
                style={{ width: "20%" }}
              ></div>
              <div
                className="progress-bar-fill high"
                style={{ width: "40%" }}
              ></div>
            </div>
            <div className="legend">
              <span className="critical">Critical (20)</span>
              <span className="high">High (100)</span>
            </div>
            <div className="add-widget">
              <button>Add Widget</button>
            </div>
          </div>
        </div>

        <div className="dashboard-card">
          <h3>Image Security Issues</h3>
          <div className="dashboard-card-content">
            <div className="progress-bar">
              <div
                className="progress-bar-fill critical"
                style={{ width: "20%" }}
              ></div>
              <div
                className="progress-bar-fill high"
                style={{ width: "30%" }}
              ></div>
            </div>
            <div className="legend">
              <span className="critical">Critical (20)</span>
              <span className="high">High (20)</span>
            </div>
            <div className="add-widget">
              <button>Add Widget</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistryScan;
