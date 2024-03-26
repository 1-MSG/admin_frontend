"use client";

import React, { useEffect, useRef } from "react";
import Chart from "chart.js";

const RankChart = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const labels = [
      "항목1",
      "항목2",
      "항목3",
      "항목4",
      "항목5",
      "항목6",
      "항목7",
      "항목8",
      "항목9",
      "항목10",
      "항목11",
    ];
    const data = [110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10];

    const ctx: any = chartRef.current?.getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "판매량",
            data: data,
            backgroundColor: "rgba(216,72,74, 0.7)", // 막대 색상
            borderColor: "rgb(216,72,74)", // 막대 테두리 색상
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }, []);

  return (
    <>
      <div style={{ width: "100%", height: "70%" }}>
        <canvas ref={chartRef} height="120" />
      </div>
    </>
  );
};

export default RankChart;
