"use client";

import React, { useEffect, useRef } from "react";
import Chart from "chart.js";
interface Product {
  productId: number;
  productBrand: string;
  productName: string;
  productImage: string;
  productPrice: number;
  productSellTotalCount: string;
}

interface RankChartProps {
  productValue: Product[];
}

const RankChart: React.FC<RankChartProps> = ({ productValue }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  // console.log(labels);
  // console.log(data);
  useEffect(() => {
    const labels = productValue.map((item) => item.productBrand); // 각 항목의 이름 추출
    const data = productValue.map((item) =>
      parseInt(item.productSellTotalCount)
    ); // 각 항목의 값 추출
    console.log(data);

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
