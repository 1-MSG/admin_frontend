import styles from "@/styles/main.module.css";

async function getUserAllCountData() {
  const res = await fetch("https://sssg.shop/api/v1/admin/users/count-user");
  if (!res.ok) {
    throw new Error("Network Error");
  }
  const data = await res.json();

  return data.data.usersCount;
}
async function getUserConnectCountData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/admin/users/connect-user`
  );
  if (!res.ok) {
    throw new Error("Network Error");
  }
  const data = await res.json();

  return data.data.connectCount;
}

async function getNewUserCountData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/admin/users/count-today-user`
  );
  if (!res.ok) {
    throw new Error("Network Error");
  }
  const data = await res.json();

  return data.data.usersCount;
}

async function getUserDisConnectCountData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/admin/users/count-secession-user`
  );
  if (!res.ok) {
    throw new Error("Network Error");
  }
  const data = await res.json();

  return data.data.usersSecessionCount;
}

export default async function Page() {
  const data1 = await getUserAllCountData();
  const data2 = await getUserConnectCountData();
  const data3 = await getNewUserCountData();
  const data4 = await getUserDisConnectCountData();

  return (
    <div className={styles.mainPageLeftHeader}>
      <div className={styles.mainPageLeftHeaderElement1}>
        <div className={styles.mainPageLeftHeaderElement1Count}>{data1}</div>
        <p>전체 회원 수</p>
      </div>
      <div className={styles.mainPageLeftHeaderElement2}>
        <div className={styles.mainPageLeftHeaderElement2Count}>{data2}</div>
        <p>현재 접속 회원 수</p>
      </div>
      <div className={styles.mainPageLeftHeaderElement3}>
        <div className={styles.mainPageLeftHeaderElement3Count}>{data3}</div>
        <p>오늘 가입자 수</p>
      </div>
      <div className={styles.mainPageLeftHeaderElement4}>
        <div className={styles.mainPageLeftHeaderElement4Count}>{data4}</div>
        <p>누적 탈퇴 회원 수</p>
      </div>
    </div>
  );
}
