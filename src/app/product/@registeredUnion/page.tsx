import styles from "@/styles/product.module.css";

export default function Page() {
  const companyNames = Array.from(
    { length: 50 },
    (_, index) => `company name${index + 1}`
  );
  return (
    <>
      <div className={styles.productPageRightBottomLayout}>
        <div className={styles.productPageRightBottomTitle}>상품 등록 회사</div>
        <div className={styles.productPageRightBottomContainer}>
          <div className={styles.productPageRightBottomContainerList}>
            {companyNames.map((companyName, index) => (
              <div key={index}>{companyName}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
