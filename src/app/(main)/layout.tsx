import { ReactNode } from "react";
import styles from "@/styles/layout.module.css";

type Props = { children: ReactNode; userCount: ReactNode; siteInfo: ReactNode };
export default function Layout({ children, userCount, siteInfo }: Props) {
  return (
    <div className={styles.mainPage}>
      <div className={styles.mainPageLeft}>
        {userCount}
        {children}
      </div>
      <div className={styles.mainPageRight}>{siteInfo}</div>
    </div>
  );
}
