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
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/admin/orders-price`
  );
  if (!res.ok) {
    throw new Error("Network Error");
  }
  const data = await res.json();
  console.log(data.data, "dfas");
  return data.data;
}

export default async function Page() {
  const data = await getProductSaleValueData();
  const exchange = await getProductSaleValueExchangeRate();

  //총 매출 달러 및 유로
  const totalSaleValueD = data.totalOrderPrice * exchange.krw.usd;
  const totalSaleValueE = data.totalOrderPrice * exchange.krw.eur;

  //총 수익 달러 및 유로
  const profitValueD =
    (data.totalOrderPrice - data.totalDeliveryPrice) * exchange.krw.usd;
  const profitValueE =
    (data.totalOrderPrice - data.totalDeliveryPrice) * exchange.krw.eur;

  //총 배달비 달러 및 유로
  const totalShippingCostD = data.totalDeliveryPrice * exchange.krw.usd;
  const totalShippingCostE = data.totalDeliveryPrice * exchange.krw.eur;

  return (
    <>
      <div className={styles.productPageRightTopContainer}>
        <div className={styles.productPageRightTopContainerE}>
          <GrProductHunt className={styles.icon} size={80} color="#ffffff" />
          <div className={styles.productPageRightTopContainerEValue}>
            <p>한화 : {data.totalOrderPrice} ₩ </p>
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
            <p>한화 : {data.totalOrderPrice - data.totalDeliveryPrice} ₩ </p>
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
            <p>한화 : {data.totalDeliveryPrice} ₩ </p>
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
