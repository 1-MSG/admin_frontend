import styles from "@/styles/main.module.css";
import Chart from "@/app/(main)/_components/Chart";

export default function Home() {
  return (
    <main className={styles.mainPageLeftBody}>
      <Chart />
    </main>
  );
}
