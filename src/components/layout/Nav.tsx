import React from "react";
import styles from "@/styles/nav.module.css";
import { IoHome } from "react-icons/io5";
import { SiRetool } from "react-icons/si";
import { FaUserFriends } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import Link from "next/link";

function Nav() {
  return (
    <div className={styles.navContainer}>
      <ul className={styles.navInnerContainer}>
        <li>
          <Link href={"/"}>
            <IoHome className={styles.icon} size={40} color="#FF6C6F" />
          </Link>
        </li>

        <li>
          <Link href={"/product"}>
            <SiRetool className={styles.icon} size={40} color="#FF6C6F" />
          </Link>
        </li>

        <li>
          <Link href={"/user"}>
            <FaUserFriends className={styles.icon} size={40} color="#FF6C6F" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
