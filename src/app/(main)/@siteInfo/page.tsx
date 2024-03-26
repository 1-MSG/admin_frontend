import styles from "@/styles/main.module.css";
import Performance from "@/app/(main)/_components/Performance";

export default function Page() {
  return (
    <div className={styles.mainPageRightContainer}>
      <p>performance test</p>
      <div>
        <Performance />
      </div>
    </div>
  );
}
