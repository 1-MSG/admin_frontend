import React from "react";
import styles from "@/styles/nav.module.css";
import { IoHome } from "react-icons/io5";
import { SiRetool } from "react-icons/si";
import { FaUserFriends } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";

function Nav() {
  return (
    <div className={styles.navContainer}>
      <ul className={styles.navInnerContainer}>
        <li>
          <IoHome className={styles.icon} size={40} color="#FF6C6F" />
        </li>
        <li>
          <SiRetool className={styles.icon} size={40} color="#FF6C6F" />
        </li>
        <li>
          <FaUserFriends className={styles.icon} size={40} color="#FF6C6F" />
        </li>
        <li>
          <RiCustomerService2Fill
            className={styles.icon}
            size={40}
            color="#FF6C6F"
          />
        </li>
      </ul>
    </div>
  );
}

export default Nav;
