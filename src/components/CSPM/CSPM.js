import React from "react";
import { Chart } from "react-google-charts";
import "./CSPM.css";

const CSPM = () => {
  const [cloudAccountRiskAssessment, setCloudAccountRiskAssessment] =
    React.useState({
      total: 9659,
      failed: 1689,
      warning: 681,
      notAvailable: 36,
      passed: 7253,
    });

  const cloudAccountRiskAssessmentData = [
    ["Risk Assessment", "Count"],
    ["Failed (1689)", cloudAccountRiskAssessment.failed],
    ["Warning (681)", cloudAccountRiskAssessment.warning],
    ["Not available (36)", cloudAccountRiskAssessment.notAvailable],
    ["Passed (7253)", cloudAccountRiskAssessment.passed],
  ];

  const options = {
    pieHole: 0.4,
    colors: ["#FF0000", "#FFA500", "#A9A9A9", "#00FF00"],
    pieSliceText: "label",
    legend: { position: "bottom" },
  };

  return (
    <div className="cspm-dashboard">
      <h2>CSPM Executive Dashboard</h2>
      <div className="dashboard-row">
        <div className="dashboard-card">
          <h3>Cloud Accounts</h3>
          <div className="dashboard-card-content">
            <Chart
              chartType="PieChart"
              data={[
                ["Account Type", "Count"],
                ["Connected (2)", 2],
                ["Not Connected (2)", 2],
              ]}
              options={{
                pieHole: 0.4,
                colors: ["#000000", "#ADD8E6"],
                pieSliceText: "label",
                legend: { position: "bottom" },
              }}
              width={"100%"}
              height={"300px"}
            />
            <div className="chart-center">
              <span className="total bold">2</span>
              <span className="total">Total</span>
            </div>
            <div className="legend">
              <span className="legend-item connected">Connected (2)</span>
              <span className="legend-item not-connected">
                Not Connected (2)
              </span>
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
              <div className="chart-center">
                <span className="total bold">
                  {cloudAccountRiskAssessment.total}
                </span>
                <span className="total">Total</span>
              </div>
            </div>
            <div className="legend">
              <span className="legend-item failed">
                Failed ({cloudAccountRiskAssessment.failed})
              </span>
              <span className="legend-item warning">
                Warning ({cloudAccountRiskAssessment.warning})
              </span>
              <span className="legend-item not-available">
                Not available ({cloudAccountRiskAssessment.notAvailable})
              </span>
              <span className="legend-item passed">
                Passed ({cloudAccountRiskAssessment.passed})
              </span>
            </div>
          </div>
        </div>

        <div className="dashboard-card add-widget-card">
          <div className="dashboard-card-content">
            <button className="add-widget-button">+ Add Widget</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSPM;
