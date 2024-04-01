import styles from "@/styles/product.module.css";
import RankChart from "@/app/product/_components/Chart";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";

async function getBestProductValueData() {
  const res = await fetch(
    "https://gist.githubusercontent.com/YOON-CC/fdb23f375722de36b3175d0715f1519b/raw/277907d0698f9bf88ecc15be71d02256ac678d40/bestPorductValue.json"
  );
  if (!res.ok) {
    throw new Error("Network Error");
  }
  const data = await res.json();

  return data.products;
}

async function getBestProductData() {
  const res = await fetch(
    "https://gist.githubusercontent.com/YOON-CC/2451c25abc4a7b690a0723957cc5c46a/raw/136d77dd3c71414ef1798ef320d1e43b0975fb15/bestPorduct.json"
  );
  if (!res.ok) {
    throw new Error("Network Error");
  }
  const data = await res.json();

  return data.products;
}

export default async function Page() {
  const productsValue = await getBestProductValueData();
  console.log(productsValue);
  const products = await getBestProductData();
  // console.log(products);

  return (
    <main className={styles.productPageRightbodyContainer}>
      <div className={styles.productPageRightbodyContainerLayout}>
        <div className={styles.productPageRightbodyContainerLayoutLeft}>
          <h3 className={styles.productPageRightbodyContainerLayoutLeftTitle}>
            BEST 11
          </h3>
          <RankChart productValue={productsValue} />
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
              {products.map((product: any, index: any) => (
                <div key={index} className={styles.elementRankLayout}>
                  <div className={styles.elementRankNumber}>{index + 1}</div>
                  <div className={styles.elementRankInfoContainer}>
                    <div>{product.product_name}</div>
                    <div>{product.category}</div>
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
