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

export default function UserBlackList() {
  const [deletedUsers, setDeletedUsers] = useState<User[]>([]); // deletedUsers 배열의 타입을 User[]로 지정

  const handleDeleteUser = async (userData: any) => {
    for (var i = 0; i < userData.length; i++) {
      try {
        // 사용자 데이터를 로컬 스토리지에 추가
        const userToDelete = {
          userId: userData[i].userId,
          userName: userData[i].userName,
          userInfo: userData[i].userInfo,
        };
        console.log(userToDelete, "입니다");
        // 로컬 스토리지에 저장된 사용자 목록 가져오기
        const existingUsers = localStorage.getItem("deletedUsers");
        const updatedUsers = existingUsers
          ? [...JSON.parse(existingUsers), userToDelete]
          : [userToDelete];
        // 로컬 스토리지에 업데이트된 사용자 목록 저장
        localStorage.setItem("deletedUsers", JSON.stringify(updatedUsers));

        const response = await fetch(
          `https://sssg.shop/api/v1/auth/secession/${userData[i].userId}`,
          {
            method: "DELETE",
          }
        );
        if (response.ok) {
          console.log(response);
        } else {
          throw new Error("Failed to delete user");
        }
      } catch (error) {
        console.error("Error deleting user:", error);
      } finally {
      }
    }
  };

  useEffect(() => {
    const storedDeletedUsers = localStorage.getItem("blackListUsers");
    if (storedDeletedUsers) {
      setDeletedUsers(JSON.parse(storedDeletedUsers));
    }
  }, []);

  return (
    <div className={styles.UserDeleteListContainer}>
      <div className={styles.UserDeleteListTopLayout}>
        <div className={styles.UserDeleteListTitle}>BlackList User</div>
        <button onClick={() => handleDeleteUser(deletedUsers)}>새로고침</button>
      </div>
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
