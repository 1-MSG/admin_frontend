"use client";

import React, { useEffect } from "react";
import Chart from "chart.js";

export default function CardLineChart() {
  useEffect(() => {
    const data = {
      labels: [
        "1월",
        "2월",
        "3월",
        "4월",
        "5월",
        "6월",
        "7월",
        "8월",
        "9월",
        "10월",
        "11월",
        "12월",
      ],
      datasets: [
        {
          label: new Date().getFullYear().toString(),
          backgroundColor: "#ff6c6f",
          borderColor: "#ff6c6f",
          data: [65, 78, 66, 44, 56, 67, 75, 65, 78, 66, 44, 56, 67, 75],
          fill: false,
        },
        {
          label: (new Date().getFullYear() - 1).toString(),
          backgroundColor: "grey",
          borderColor: "grey",
          data: [40, 68, 86, 74, 56, 60, 87, 56, 67, 75, 65, 78, 66, 44],
          fill: false,
        },
      ],
    };

    const options: any = {
      maintainAspectRatio: true,
      responsive: true,
      title: { display: false },
      legend: { labels: { fontColor: "grey" }, position: "bottom" },
      tooltips: { mode: "index", intersect: false },
      hover: { mode: "nearest", intersect: true },
      scales: {
        xAxes: [
          {
            ticks: { fontColor: "grey" },
            display: true,
            gridLines: {
              display: false,
              borderDash: [2],
              borderDashOffset: [2],
              color: "grey",
              zeroLineColor: "grey",
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2],
            },
          },
        ],
        yAxes: [
          {
            ticks: { display: false },
            display: true,
            gridLines: {
              borderDash: [3],
              borderDashOffset: [3],
              drawBorder: false,
              color: "grey",
              zeroLineColor: "grey",
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2],
            },
          },
        ],
      },
    };

    const drawChart = () => {
      const canvas = document.getElementById("line-chart") as HTMLCanvasElement;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          new Chart(ctx, { type: "line", data, options });
        }
      }
    };

    drawChart();
  }, []);
  return (
    <>
      <div
        style={{
          background: "#ff6c6f",
          width: "100px",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "3px",
          borderRadius: "5px",
          marginTop: "3vh",
          boxShadow: "0px 0px 5px rgba(74, 74, 74, 0.5)",
        }}
      >
        User Rate
      </div>

      {/* Chart */}
      <div className="relative h-350-px" style={{ marginTop: "10px" }}>
        <canvas id="line-chart" height="50"></canvas>
      </div>
    </>
  );
}
