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
          backgroundColor: "white",
          borderColor: "white",
          data: [65, 78, 66, 44, 56, 67, 75, 65, 78, 66, 44, 56, 67, 75],
          fill: false,
          borderWidth: 2, // 선 두께 조절
        },
      ],
    };

    const options: any = {
      maintainAspectRatio: true,
      responsive: true,
      title: { display: false },
      legend: {
        labels: { fontColor: "white", fontSize: 7 },
        position: "bottom",
      },
      tooltips: { mode: "index", intersect: false },
      hover: { mode: "nearest", intersect: true },
      scales: {
        xAxes: [
          {
            ticks: { fontColor: "white", fontSize: 7 },
            display: true,
            gridLines: {
              display: false,
              borderDash: [2],
              borderDashOffset: [2],
              color: "white",
              zeroLineColor: "white",
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
              color: "white",
              zeroLineColor: "white",
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
          width: "100px",
          fontSize: "13px",
          fontWeight: "bold",
          marginTop: "1vh",
          color: "white",
        }}
      >
        User Rate
      </div>

      {/* Chart */}
      <div className="relative h-350-px" style={{ marginTop: "10px" }}>
        <canvas id="line-chart" height="100"></canvas>
      </div>
    </>
  );
}
