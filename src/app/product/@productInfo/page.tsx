"use client";

import styles from "@/styles/product.module.css";
import Image from "next/image";
import src from "@/assets/image/tempProduct/tempProduct.png";
import { FaSearch } from "react-icons/fa";
import React, { useState } from "react";

export default function Page() {
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

  const createProduct = () => ({
    title: "MSG상품 추가",
    maker: "스파로스 아카데미",
    price: "99,999",
    review: "1999 리뷰",
  });

  const products = Array.from({ length: 9 }, createProduct);

  return (
    <>
      <div className={styles.productPageSearchContainerLayout}>
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
      </div>
      <div className={styles.productPageListContainerLayout}>
        <div className={styles.productPageListContainerContainer}>
          {/* 요소 */}
          {products.map((product, index) => (
            <div key={index} className={styles.productPageListContainerElement}>
              <div className={styles.productPageListImageContainer}>
                <Image
                  src={src}
                  style={{ width: "100%", height: "100%" }}
                  alt=""
                />
              </div>
              <div className={styles.productPageListContainerElementInfo}>
                <div className={styles.productPageListTitle}>
                  {product.title}
                </div>
                <div className={styles.productPageListMaker}>
                  {product.maker}
                </div>
                <div className={styles.productPageListPrice}>
                  {product.price}
                </div>
                <div className={styles.productPageListReview}>
                  {product.review}
                </div>
                <div className={styles.productPageBtnContainer}>
                  <button>Search</button>
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              </div>
            </div>
          ))}
          {/* 요소 끝*/}
        </div>
      </div>
    </>
  );
}
