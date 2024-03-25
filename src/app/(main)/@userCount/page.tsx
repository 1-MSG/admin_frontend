import styles from "@/styles/main.module.css";

export default function Page() {
  return (
    <div className={styles.mainPageLeftHeader}>
      <div className={styles.mainPageLeftHeaderElement1}>
        <div className={styles.mainPageLeftHeaderElement1Count}>2024</div>
        <p>전체 회원 수</p>
      </div>
      <div className={styles.mainPageLeftHeaderElement2}>
        <div className={styles.mainPageLeftHeaderElement2Count}>2024</div>
        <p>현재 접속 회원 수</p>
      </div>
      <div className={styles.mainPageLeftHeaderElement3}>
        <div className={styles.mainPageLeftHeaderElement3Count}>2024</div>
        <p>누적 구매 수</p>
      </div>
      <div className={styles.mainPageLeftHeaderElement4}>
        <div className={styles.mainPageLeftHeaderElement4Count}>2024</div>
        <p>누적 탈퇴 회원 수</p>
      </div>
    </div>
  );
}
