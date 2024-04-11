"use client";

import React, { useState, useEffect } from "react";
import styles from "@/styles/main.module.css";

export default function Performance() {
  // const [percentage, setPercentage] = useState(77);
  const [searchTime, setSearchTime] = useState(0);
  const [productDetailTime, setProductDetailTime] = useState(0);

  //값 변화함수
  // const updatePercentage = () => {
  //   const newPercentage = Math.floor(Math.random() * 101);
  //   setPercentage(newPercentage);
  // };

  //ms
  const handleFormSubmit = async () => {
    try {
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    try {
      // 입력된 텍스트를 기반으로 API 요청
      const response = await fetch(
        `https://sssg.shop/api/v1/search?keyword=여성&page=0`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const milliseconds = new Date().getTime();
      setSearchTime(Math.abs(milliseconds - data.data.responseTime));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    try {
      // 입력된 텍스트를 기반으로 API 요청
      const response = await fetch(
        `https://sssg.shop/api/v1/products?productIds=648&productIds=632&productIds=619&productIds=617&productIds=616&productIds=610&productIds=502&productIds=500&productIds=499&productIds=492`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const milliseconds = new Date().getTime();
      setProductDetailTime(Math.abs(milliseconds - data.data[0].responseTime));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    handleFormSubmit();
  }, []);

  const percentage: number = parseFloat(
    ((13 / (productDetailTime + searchTime)) * 100).toFixed(1)
  );
  console.log(percentage);
  const degree = (percentage / 100) * 360;

  const handleClick = () => {
    handleFormSubmit();
  };

  return (
    <>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div
          className={styles.mainPageRightContainerCircle}
          style={{
            background: `conic-gradient(#f99496, #ff6c6f, #ff8c6f ${degree}deg, white 0deg)`,
          }}
        >
          <div className={styles.mainPageRightContainerInnerCircle}>
            <span>{percentage}%</span>
          </div>
        </div>
      </div>
      <div className={styles.mainPageRightContainerRate}>
        <div className={styles.mainPageRightContainerRateTitle}>
          Loading Detail page
        </div>
        <div className={styles.mainPageRightContainerRateValue}>
          {productDetailTime}ms
        </div>
      </div>
      <div className={styles.mainPageRightContainerRate}>
        <div className={styles.mainPageRightContainerRateTitle}>
          Loading Search result
        </div>
        <div className={styles.mainPageRightContainerRateValue}>
          {searchTime}ms
        </div>
      </div>
      <button
        className={styles.mainPageRightContainerRateBtn}
        onClick={handleClick}
      >
        Test
      </button>
    </>
  );
}
