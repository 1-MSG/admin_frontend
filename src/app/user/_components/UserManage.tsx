"use client";

import React, { useState } from "react";
import styles from "@/styles/user.module.css";

export default function UserManage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (event: any) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event: any) => {
    setContent(event.target.value);
  };

  const saveToFile = () => {
    const currentDate = new Date();
    const dateString = currentDate.toISOString().slice(0, 10);
    const fileName = `MSG_ADMIN_${dateString}.txt`;

    const data = `${title}\n\n${content}`;
    const element = document.createElement("a");
    const file = new Blob([data], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
  };

  return (
    <>
      <div className={styles.userManageContainer}>
        <div className={styles.userManageLayout}>
          <div>Report</div>
          <div className={styles.userManageReportLayout}>
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              placeholder="Title"
            />
            <textarea
              value={content}
              onChange={handleContentChange}
              placeholder="Content"
              rows={10}
              style={{ resize: "none" }}
            />
            <button onClick={saveToFile}>저장</button>
          </div>
        </div>
      </div>
    </>
  );
}
