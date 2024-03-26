import styles from "@/styles/product.module.css";
import RankChart from "@/app/product/_components/Chart";

export default function Page() {
  return (
    <main className={styles.productPageRightbodyContainer}>
      <div className={styles.productPageRightbodyContainerLayout}>
        <div className={styles.productPageRightbodyContainerLayoutLeft}>
          <h3 className={styles.productPageRightbodyContainerLayoutLeftTitle}>
            BEST 11
          </h3>
          <RankChart />
        </div>
        <div className={styles.productPageRightbodyContainerLayoutRight}> </div>
      </div>
    </main>
  );
}
