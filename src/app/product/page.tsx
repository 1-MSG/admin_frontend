import styles from "@/styles/product.module.css";
import RankChart from "@/app/product/_components/Chart";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";
import Link from "next/link";

async function getBestProductValueData() {
  const res = await fetch("https://sssg.shop/api/v1/ranking11", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Network Error");
  }
  const data = await res.json();
  console.log(data.data);

  return data.data;
}

export default async function Page() {
  const productsValue = await getBestProductValueData();

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
              {productsValue.map((product: any, index: any) => (
                <div key={index} className={styles.elementRankLayout}>
                  <div className={styles.elementRankNumber}>{index + 1}</div>
                  <div className={styles.elementRankInfoContainer}>
                    <div>
                      {product.productName.length > 13
                        ? product.productName.substring(0, 13) + "..."
                        : product.productName}
                    </div>
                    <div>{product.productBrand}</div>
                    <div>{product.productPrice}</div>
                  </div>

                  <div className={styles.icon2}>
                    <Link href={product.productImage}>
                      <FaSearchPlus size={15} color="grey" />
                    </Link>
                  </div>

                  <div className={styles.icon2}>
                    <Link
                      href={`https://ssgcom-app.vercel.app/product-detail?productId=${product.productId}`}
                    >
                      <FaExternalLinkAlt size={15} color="grey" />
                    </Link>
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
