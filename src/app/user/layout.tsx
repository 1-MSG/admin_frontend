import { ReactNode } from "react";
import styles from "@/styles/layout.module.css";

type Props = {
  children: ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div className={styles.userPage}>
      <div className={styles.userPageLeft}>{children}</div>
    </div>
  );
}
