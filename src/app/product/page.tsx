import styles from "@/styles/product.module.css";
import RankChart from "@/app/product/_components/Chart";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";

export default function Page() {
  const products = [
    { name: "데님셔츠 마르세유", brand: "지오다노", price: "87,000" },
    { name: "데님셔츠 마르세유", brand: "지오다노", price: "87,000" },
    { name: "데님셔츠 마르세유", brand: "지오다노", price: "87,000" },
    { name: "데님셔츠 마르세유", brand: "지오다노", price: "87,000" },
    { name: "데님셔츠 마르세유", brand: "지오다노", price: "87,000" },
    { name: "데님셔츠 마르세유", brand: "지오다노", price: "87,000" },
    { name: "데님셔츠 마르세유", brand: "지오다노", price: "87,000" },
    { name: "데님셔츠 마르세유", brand: "지오다노", price: "87,000" },
    { name: "데님셔츠 마르세유", brand: "지오다노", price: "87,000" },
    { name: "데님셔츠 마르세유", brand: "지오다노", price: "87,000" },
    { name: "데님셔츠 마르세유", brand: "지오다노", price: "87,000" },
  ];

  return (
    <main className={styles.productPageRightbodyContainer}>
      <div className={styles.productPageRightbodyContainerLayout}>
        <div className={styles.productPageRightbodyContainerLayoutLeft}>
          <h3 className={styles.productPageRightbodyContainerLayoutLeftTitle}>
            BEST 11
          </h3>
          <RankChart />
        </div>
        <div className={styles.productPageRightbodyContainerLayoutRight}>
          <div
            className={styles.productPageRightbodyContainerLayoutRightContainer}
          >
            <div
              className={
                styles.productPageRightbodyContainerLayoutRightContainerE
              }
            >
              {products.map((product, index) => (
                <div key={index} className={styles.elementRankLayout}>
                  <div className={styles.elementRankNumber}>{index + 1}</div>
                  <div className={styles.elementRankInfoContainer}>
                    <div>{product.name}</div>
                    <div>{product.brand}</div>
                    <div>{product.price}</div>
                  </div>
                  <div className={styles.icon2}>
                    <FaSearchPlus size={15} color="grey" />
                  </div>
                  <div className={styles.icon2}>
                    <FaExternalLinkAlt size={15} color="grey" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
