import React from "react";
import { Chart } from "react-google-charts";
import "./Dashboard.css";

const Dashboard = () => {
  // State for Cloud Account Risk Assessment data
  const [cloudAccountRiskAssessment, setCloudAccountRiskAssessment] =
    React.useState({
      total: 9659,
      failed: 100,
      warning: 10,
      notAvailable: 100,
      passed: 7253,
    });

  // Data for Pie Chart
  const cloudAccountRiskAssessmentData = [
    ["Risk Assessment", "Count"],
    ["Failed", cloudAccountRiskAssessment.failed],
    ["Warning", cloudAccountRiskAssessment.warning],
    ["Not available", cloudAccountRiskAssessment.notAvailable],
    ["Passed", cloudAccountRiskAssessment.passed],
  ];

  // Options for Pie Chart
  const options = {
    title: "Cloud Account Risk Assessment",
    pieHole: 0.4, // Makes it a donut chart
    colors: ["#FF0000", "#FFA500", "#A9A9A9", "#00FF00"],
    pieSliceText: "label",
    legend: { position: "bottom" },
  };

  return (
    <div className="dashboard">
      <h1>CNAPP Dashboard</h1>
      <h2>CSPM Executive Dashboard</h2>
      <div className="dashboard-row">
        <div className="dashboard-card">
          <h3>Cloud Accounts</h3>
          <div className="dashboard-card-content">
            {/* Pie Chart for Cloud Accounts */}
            <Chart
              chartType="PieChart"
              data={[
                ["Account Type", "Count"],
                ["Connected", 2],
                ["Not Connected", 2],
              ]}
              options={{
                title: "Cloud Accounts",
                pieHole: 0.4,
                colors: ["#00FF00", "#FF0000"],
                pieSliceText: "label",
                legend: { position: "bottom" },
              }}
              width={"100%"}
              height={"300px"}
            />
            <span className="total">Total: 22</span>
            <div className="add-widget">
              <button>Add Widget</button>
            </div>
          </div>
        </div>

        <div className="dashboard-card">
          <h3>Cloud Account Risk Assessment</h3>
          <div className="dashboard-card-content">
            <div className="pie-chart">
              <Chart
                chartType="PieChart"
                data={cloudAccountRiskAssessmentData}
                options={options}
                width={"100%"}
                height={"300px"}
              />
              <span className="total">
                Total: {cloudAccountRiskAssessment.total}
              </span>
            </div>
            <div className="legend">
              <span className="failed">
                Failed ({cloudAccountRiskAssessment.failed})
              </span>
              <span className="warning">
                Warning ({cloudAccountRiskAssessment.warning})
              </span>
              <span className="not-available">
                Not available ({cloudAccountRiskAssessment.notAvailable})
              </span>
              <span className="passed">
                Passed ({cloudAccountRiskAssessment.passed})
              </span>
            </div>
            <div className="add-widget">
              <button>Add Widget</button>
            </div>
          </div>
        </div>
      </div>

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

export default Dashboard;
