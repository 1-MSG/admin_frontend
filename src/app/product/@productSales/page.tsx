import styles from "@/styles/product.module.css";
import { GrProductHunt } from "react-icons/gr";
import { FaSeedling } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";

//환률 api
async function getProductSaleValueExchangeRate() {
  const res = await fetch(
    "https://latest.currency-api.pages.dev/v1/currencies/krw.json"
  );
  if (!res.ok) {
    throw new Error("Network Error");
  }
  const data = await res.json();

  return data;
}

//쇼핑몰 수익 api
async function getProductSaleValueData() {
  const res = await fetch("http://localhost:3000/api/sale");
  if (!res.ok) {
    throw new Error("Network Error");
  }
  const data = await res.json();

  return data;
}

export default async function Page() {
  const data = await getProductSaleValueData();
  console.log(data);
  const exchange = await getProductSaleValueExchangeRate();

  //총 매출 달러 및 유로
  const totalSaleValueD = data.totalSales * exchange.krw.usd;
  const totalSaleValueE = data.totalSales * exchange.krw.eur;

  //총 수익 달러 및 유로
  const profitValueD =
    (data.totalSales - data.totalShippingCost) * exchange.krw.usd;
  const profitValueE =
    (data.totalSales - data.totalShippingCost) * exchange.krw.eur;

  //총 배달비 달러 및 유로
  const totalShippingCostD = data.totalShippingCost * exchange.krw.usd;
  const totalShippingCostE = data.totalShippingCost * exchange.krw.eur;

  return (
    <>
      <div className={styles.productPageRightTopContainer}>
        <div className={styles.productPageRightTopContainerE}>
          <GrProductHunt className={styles.icon} size={80} color="#ffffff" />
          <div className={styles.productPageRightTopContainerEValue}>
            <p>한화 : {data.totalSales} ₩ </p>
            <p>달러 : {totalSaleValueD} $</p>
            <p>유로 : {totalSaleValueE} €</p>
          </div>
          <div className={styles.productPageRightTopContainerTitle}>
            총 매출
          </div>
        </div>
        <div className={styles.productPageRightTopContainerE}>
          <FaSeedling className={styles.icon} size={80} color="#ffffff" />
          <div className={styles.productPageRightTopContainerEValue}>
            <p>한화 : {data.totalSales - data.totalShippingCost} ₩ </p>
            <p>달러 : {profitValueD} $</p>
            <p>유로 : {profitValueE} €</p>
          </div>
          <div className={styles.productPageRightTopContainerTitle}>
            순 이익
          </div>
        </div>
        <div className={styles.productPageRightTopContainerE}>
          <CiDeliveryTruck className={styles.icon} size={80} color="#ffffff" />
          <div className={styles.productPageRightTopContainerEValue}>
            <p>한화 : {data.totalShippingCost} ₩ </p>
            <p>달러 : {totalShippingCostD} $</p>
            <p>유로 : {totalShippingCostE} €</p>
          </div>
          <div className={styles.productPageRightTopContainerTitle}>
            총 배송비
          </div>
        </div>
      </div>
    </>
  );
}
