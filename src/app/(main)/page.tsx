import styles from "@/styles/main.module.css";
import Image from "next/image";
import Chart from "@/app/(main)/_components/Chart";
import event from "@/assets/image/events/event.png";

export default function Home() {
  return (
    <main className={styles.mainPageLeftBody}>
      <Chart />

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
