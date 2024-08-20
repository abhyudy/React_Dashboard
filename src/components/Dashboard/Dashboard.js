import React from "react";
import { Chart } from "react-google-charts";
import "./Dashboard.css";

const Dashboard = () => {
  // State for Cloud Account Risk Assessment data
  const [cloudAccountRiskAssessment, setCloudAccountRiskAssessment] =
    React.useState({
      total: 9659,
      failed: 1689,
      warning: 681,
      notAvailable: 36,
      passed: 7253,
    });

  // Data for Pie Chart
  const cloudAccountRiskAssessmentData = [
    ["Risk Assessment", "Count"],
    ["Failed (1689)", cloudAccountRiskAssessment.failed],
    ["Warning (681)", cloudAccountRiskAssessment.warning],
    ["Not available (36)", cloudAccountRiskAssessment.notAvailable],
    ["Passed (7253)", cloudAccountRiskAssessment.passed],
  ];

  // Options for Pie Chart
  const options = {
    title: "Cloud Account Risk Assessment",
    pieHole: 0.7,
    colors: ["#FF0000", "#FFA500", "#A9A9A9", "#00FF00"],
    pieSliceText: "label",
    legend: { position: "none" }, // Hide the default legend
  };

  return (
    <div className="dashboard">
      <h1>CNAPP Dashboard</h1>
      <h2>CSPM Executive Dashboard</h2>
      <div className="dashboard-row">
        <div className="dashboard-card">
          <h3>Cloud Accounts</h3>
          <div className="dashboard-card-content">
            <div className="pie-chart-container">
              <Chart
                chartType="PieChart"
                data={[
                  ["Account Type", "Count"],
                  ["Connected (2)", 2],
                  ["Not Connected (2)", 2],
                ]}
                options={{
                  pieHole: 0.7,
                  colors: ["#0000FF", "#ADD8E6"],
                  pieSliceText: "label",
                  legend: { position: "none" }, // Hide the default legend
                }}
                width={"150px"}
                height={"150px"}
              />
              <div className="pie-chart-center">
                <strong>2</strong>
                <span>Total</span>
              </div>
            </div>
            <div className="cloud-account-legend">
              <span className="connected" style={{ color: "#0000FF" }}>
                &#9679; Connected (2)
              </span>
              <span className="not-connected" style={{ color: "#ADD8E6" }}>
                &#9679; Not Connected (2)
              </span>
            </div>
          </div>
        </div>

        <div className="dashboard-card">
          <h3>Cloud Account Risk Assessment</h3>
          <div className="dashboard-card-content">
            <div className="pie-chart-container">
              <Chart
                chartType="PieChart"
                data={cloudAccountRiskAssessmentData}
                options={options}
                width={"150px"}
                height={"150px"}
              />
              <div className="pie-chart-center">
                <strong>{cloudAccountRiskAssessment.total}</strong>
                <span>Total</span>
              </div>
            </div>
            <div className="legend">
              <span className="failed" style={{ color: "#FF0000" }}>
                &#9679; Failed ({cloudAccountRiskAssessment.failed})
              </span>
              <span className="warning" style={{ color: "#FFA500" }}>
                &#9679; Warning ({cloudAccountRiskAssessment.warning})
              </span>
              <span className="not-available" style={{ color: "#A9A9A9" }}>
                &#9679; Not available ({cloudAccountRiskAssessment.notAvailable}
                )
              </span>
              <span className="passed" style={{ color: "#00FF00" }}>
                &#9679; Passed ({cloudAccountRiskAssessment.passed})
              </span>
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
