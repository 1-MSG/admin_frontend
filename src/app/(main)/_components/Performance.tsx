"use client";

import React, { useState, useEffect } from "react";
import styles from "@/styles/main.module.css";

export default function Performance() {
  const [percentage, setPercentage] = useState(77);

  //값 변화함수
  const updatePercentage = () => {
    const newPercentage = Math.floor(Math.random() * 101);
    setPercentage(newPercentage);
  };

  const degree = (percentage / 100) * 360;

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
          Loading Main page
        </div>
        <div className={styles.mainPageRightContainerRateValue}>14ms</div>
      </div>
      <div className={styles.mainPageRightContainerRate}>
        <div className={styles.mainPageRightContainerRateTitle}>
          Loading Detail page
        </div>
        <div className={styles.mainPageRightContainerRateValue}>72ms</div>
      </div>
      <div className={styles.mainPageRightContainerRate}>
        <div className={styles.mainPageRightContainerRateTitle}>
          Loading Search result
        </div>
        <div className={styles.mainPageRightContainerRateValue}>32ms</div>
      </div>
      <button className={styles.mainPageRightContainerRateBtn}>Test</button>
    </>
  );
}
