import styles from "@/styles/main.module.css";
import Image from "next/image";
import CardLineChart from "@/app/(main)/_components/Chart";
import event from "@/assets/image/events/event.png";
import TestPerformance from "./_components/TestPerformance";

async function getMonthUserData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/admin/users/count-monthly-assign`,
    {
      next: { revalidate: 3600 },
    }
  );
  if (!res.ok) {
    throw new Error("Network Error");
  }
  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const data = await getMonthUserData();
  console.log(data);
  return (
    <main className={styles.mainPageLeftBody}>
      <CardLineChart data={data} />
      <div
        style={{
          background: "#ff6c6f",
          width: "140px",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "3px",
          borderRadius: "5px",
          marginTop: "3vh",
          boxShadow: "0px 0px 5px rgba(74, 74, 74, 0.5)",
        }}
      >
        진행중인 이벤트
      </div>
      <div
        className={styles.xScroll}
        style={{
          display: "flex",
          width: "100%",
          overflowX: "auto",
          whiteSpace: "nowrap",
        }}
      >
        <div style={{ width: "fit-content", marginTop: "2vh" }}>
          <div
            style={{
              width: "100%",
              height: "auto",
              display: "inline-block",
            }}
          >
            <Image
              src={event}
              alt=""
              style={{
                width: "242px",
                height: "120px",
                display: "inline-block",
                borderRadius: "5px",
              }}
            />
            <Image
              src={event}
              alt=""
              style={{
                width: "242px",
                height: "120px",
                marginLeft: "12px",
                display: "inline-block",
                borderRadius: "5px",
              }}
            />
            <Image
              src={event}
              alt=""
              style={{
                width: "242px",
                height: "120px",
                marginLeft: "12px",
                display: "inline-block",
                borderRadius: "5px",
              }}
            />
            <Image
              src={event}
              alt=""
              style={{
                width: "242px",
                height: "120px",
                marginLeft: "12px",
                display: "inline-block",
                borderRadius: "5px",
              }}
            />
            <Image
              src={event}
              alt=""
              style={{
                width: "242px",
                height: "120px",
                marginLeft: "12px",
                display: "inline-block",
                borderRadius: "5px",
              }}
            />
            <Image
              src={event}
              alt=""
              style={{
                width: "242px",
                height: "120px",
                marginLeft: "12px",
                display: "inline-block",
                borderRadius: "5px",
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
