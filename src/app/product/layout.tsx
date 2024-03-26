import { ReactNode } from "react";
import styles from "@/styles/layout.module.css";

type Props = {
  children: ReactNode;
  productSales: ReactNode;
  registeredUnion: ReactNode;
  productInfo: ReactNode;
};
export default function Layout({
  children,
  productSales,
  registeredUnion,
  productInfo,
}: Props) {
  return (
    <div className={styles.productPage}>
      <div className={styles.productPageLeft}>
        {productSales}
        {children}
        {registeredUnion}
      </div>
      <div className={styles.productPageRight}>{productInfo}</div>
    </div>
  );
}
