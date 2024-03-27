import styles from "@/styles/product.module.css";
import Image from "next/image";
import src from "@/assets/image/tempProduct/tempProduct.png";
import { FaSearch } from "react-icons/fa";

export default async function Page() {
  const createProduct = () => ({
    title: "MSG상품 추가",
    maker: "스파로스 아카데미",
    price: "99,999",
    review: "1999 리뷰",
  });

  const products = Array.from({ length: 9 }, createProduct);

  async function handleSearchSummit(formData: any) {
    "use server";
    console.log("검색");
  }

  return (
    <>
      <div className={styles.productPageSearchContainerLayout}>
        <div className={styles.productPageSearchModule}>
          <form
            action={handleSearchSummit}
            style={{
              display: "flex",
              height: "100%",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <input className={styles.productPageSearchContainerInput}></input>
            <button className={styles.productPageSearchContainerBtn}>
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
