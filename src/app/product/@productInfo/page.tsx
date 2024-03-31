"use client";

import styles from "@/styles/product.module.css";
import Image from "next/image";
import src from "@/assets/image/tempProduct/tempProduct.png";
import { FaSearch } from "react-icons/fa";
import React, { useState } from "react";
import Scroll from "@/app/product/_components/Scroll";

export default function Page() {
  const [keyword, setKeyword] = useState("fdd");
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setKeyword(inputValue);
  };

  return (
    <>
      <div className={styles.productPageSearchContainerLayout}>
        <div className={styles.productPageSearchModule}>
          <input
            className={styles.productPageSearchContainerInput}
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            type="button" // 새로고침 방지를 위해 type 속성을 button으로 설정
            className={styles.productPageSearchContainerBtn}
            onClick={handleButtonClick}
          >
            <FaSearch size={20} />
          </button>
        </div>
      </div>
      <Scroll keyword={keyword} />
    </>
  );
}
