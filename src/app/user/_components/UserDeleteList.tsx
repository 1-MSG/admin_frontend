"use client";

import React, { useState, useEffect } from "react";
import styles from "@/styles/user.module.css";
import { FaSearch } from "react-icons/fa";

// 사용자 객체의 타입 정의
interface User {
  userId: number;
  userName: string;
  userInfo: string;
}

export default function UserDeleteList() {
  const [deletedUsers, setDeletedUsers] = useState<User[]>([]); // deletedUsers 배열의 타입을 User[]로 지정

  useEffect(() => {
    const storedDeletedUsers = localStorage.getItem("deletedUsers");
    if (storedDeletedUsers) {
      setDeletedUsers(JSON.parse(storedDeletedUsers));
    }
  }, []);

  return (
    <div className={styles.UserDeleteListContainer}>
      <div className={styles.UserDeleteListTitle}>Delete User</div>
      <div className={styles.userDeleteList}>
        {deletedUsers.map((user, index) => (
          <div key={index} className={styles.userDeleteListE}>
            <div className={styles.userDeleteListE1}>{user.userId}</div>
            <div className={styles.userDeleteListE2}>{user.userName}</div>
            <div className={styles.userDeleteListE3}>{user.userInfo}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
