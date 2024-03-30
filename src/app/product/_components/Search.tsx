"use client";

import React, { useState } from "react";
import styles from "@/styles/product.module.css";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchValue(event.target.value);
  };

  const handleButtonClick = async () => {
    try {
      const response = await fetch(
        `https://sssg.shop/api/v1/search?keyword=${searchValue}&index=${0}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className={styles.productPageSearchModule}>
      <form
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          justifyContent: "center",
        }}
        onSubmit={(e) => e.preventDefault()} // 폼 제출 시 페이지 새로고침 방지
      >
        <input
          className={styles.productPageSearchContainerInput}
          value={searchValue}
          onChange={handleInputChange}
        />
        <button
          type="button" // 새로고침 방지를 위해 type 속성을 button으로 설정
          className={styles.productPageSearchContainerBtn}
          onClick={handleButtonClick}
        >
          <FaSearch size={20} />
        </button>
      </form>
    </div>
  );
}
