"use client";

import React, { useState } from "react";
import styles from "@/styles/user.module.css";
import { FaSearch } from "react-icons/fa";

export default function UserSearch() {
  const [searchText, setSearchText] = useState(""); // 입력된 텍스트 상태 관리
  const [userList, setUserList] = useState([]); // 사용자 목록 상태 관리

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchText(e.target.value); // 입력된 텍스트 업데이트
  };

  const handleFormSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault(); // 폼 기본 제출 동작 방지

    try {
      // 입력된 텍스트를 기반으로 API 요청
      const response = await fetch(
        `https://sssg.shop/api/v1/admin/users/users?userName=${searchText}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setUserList(data.data);
      console.log("API response:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log(userList);

  const handleDeleteUser = async () => {
    try {
      const response = await fetch(
        "https://sssg.shop/api/v1/auth/secession/5",
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
  };

  return (
    <>
      <div className={styles.userSearchContainer}>
        <form className={styles.userPageForm} onSubmit={handleFormSubmit}>
          {/* 입력된 텍스트를 상태와 연결 */}
          <input
            className={styles.userPageSearchContainerInput}
            value={searchText}
            onChange={handleInputChange}
          ></input>
          <button className={styles.userPageSearchContainerBtn} type="submit">
            <FaSearch size={10} />
          </button>
        </form>
        <div className={styles.userSearchList}>
          {userList.map((userData: any, index: number) => (
            <div key={index} className={styles.userListE}>
              <div className={styles.userListE1}>{userData.userId}</div>
              <div className={styles.userListE2}>{userData.userName}</div>
              <div className={styles.userListE3}>{userData.userInfo}</div>
              <div className={styles.userListE4}>{userData.loginType}</div>
              <div className={styles.userListE5}>
                {userData.status === true ? "🟢" : "⚪"}
              </div>
              <div className={styles.userListE6}>
                <button>Black List</button>
              </div>
              <div className={styles.userListE7}>
                <button onClick={handleDeleteUser}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
