"use client";

import React, { useState } from "react";

const TestPerformance: React.FC = () => {
  const [searchTimeList, setSearchTimeList] = useState<number[]>([]);
  const [productDetailTimeList, setProductDetailTimeList] = useState<number[]>(
    []
  );

  const handleFormSubmit = async () => {
    try {
      const searchTimes: number[] = [];
      const productDetailTimes: number[] = [];

      for (let i = 0; i < 1000; i++) {
        // 검색 요청
        const searchResponse = await fetch(
          `https://sssg.shop/api/v1/search?keyword=여성&page=0`
        );
        if (!searchResponse.ok) {
          throw new Error("Network response was not ok");
        }
        const searchData = await searchResponse.json();
        const searchMilliseconds = new Date().getTime();
        searchTimes.push(
          Math.abs(searchMilliseconds - searchData.data.responseTime)
        );

        // 제품 상세 정보 요청
        const productResponse = await fetch(
          `https://sssg.shop/api/v1/products?productIds=648&productIds=632&productIds=619&productIds=617&productIds=616&productIds=610&productIds=502&productIds=500&productIds=499&productIds=492`
        );
        if (!productResponse.ok) {
          throw new Error("Network response was not ok");
        }
        const productData = await productResponse.json();
        const productMilliseconds = new Date().getTime();
        productDetailTimes.push(
          Math.abs(productMilliseconds - productData.data[0].responseTime)
        );
      }

      setSearchTimeList(searchTimes);
      setProductDetailTimeList(productDetailTimes);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const calculateAverage = (arr: number[]) => {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
  };

  const handleButtonClick = () => {
    handleFormSubmit();
  };

  const averageSearchTime = calculateAverage(searchTimeList);
  const averageProductDetailTime = calculateAverage(productDetailTimeList);

  return (
    <div>
      <button onClick={handleButtonClick}>요청 보내기</button>
      <div>
        <p>제품 상세 정보 시간 평균: {averageProductDetailTime}</p>
        <p>검색 시간 평균: {averageSearchTime}</p>
      </div>
    </div>
  );
};

export default TestPerformance;
