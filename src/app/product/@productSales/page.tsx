import styles from "@/styles/product.module.css";
import { GrProductHunt } from "react-icons/gr";
import { FaSeedling } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";

export default function Page() {
  return (
    <>
      <div className={styles.productPageRightTopContainer}>
        <div className={styles.productPageRightTopContainerE}>
          <GrProductHunt className={styles.icon} size={80} color="#ffffff" />
          <div className={styles.productPageRightTopContainerEValue}>
            <p>한화 : 100,000,000 ₩ </p>
            <p>달러 : 74575.11 $</p>
            <p>유로 : 686979.95 €</p>
          </div>
          <div className={styles.productPageRightTopContainerTitle}>
            총 매출
          </div>
        </div>
        <div className={styles.productPageRightTopContainerE}>
          <FaSeedling className={styles.icon} size={80} color="#ffffff" />
          <div className={styles.productPageRightTopContainerEValue}>
            <p>한화 : 100,000,000 ₩ </p>
            <p>달러 : 74575.11 $</p>
            <p>유로 : 686979.95 €</p>
          </div>
          <div className={styles.productPageRightTopContainerTitle}>
            순 이익
          </div>
        </div>
        <div className={styles.productPageRightTopContainerE}>
          <CiDeliveryTruck className={styles.icon} size={80} color="#ffffff" />
          <div className={styles.productPageRightTopContainerEValue}>
            <p>한화 : 100,000,000 ₩ </p>
            <p>달러 : 74575.11 $</p>
            <p>유로 : 686979.95 €</p>
          </div>
          <div className={styles.productPageRightTopContainerTitle}>
            총 배송비
          </div>
        </div>
      </div>
    </>
  );
}
