import styles from "@/styles/product.module.css";

async function getProductBrand() {
  const res = await fetch(
    "https://gist.githubusercontent.com/YOON-CC/c9ab550e8f4b83c34db60bec462c6f6c/raw/98b235f0b4298016d9b2e66ff6cb8f1175ac2ca1/brandList.json"
  );
  if (!res.ok) {
    throw new Error("Network Error");
  }
  const data = await res.json();

  return data;
}

export default async function Page() {
  const brand = await getProductBrand();
  return (
    <>
      <div className={styles.productPageRightBottomLayout}>
        <div className={styles.productPageRightBottomTitle}>상품 등록 회사</div>
        <div className={styles.productPageRightBottomContainer}>
          <div className={styles.productPageRightBottomContainerList}>
            {brand.map((brand: any, index: any) => (
              <div key={index}>{brand.name}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
