import styles from "@/styles/user.module.css";
import UserManage from "./_components/UserManage";
import { FaSearch } from "react-icons/fa";
import Chart from "@/app/user/_components/Chart";
import Scroll from "./_components/Scroll";
import UserSearch from "./_components/UserSearch";
import UserDeleteList from "./_components/UserDeleteList";
import UserBlackList from "./_components/UserBlackList";

async function getUserAllCountData() {
  const res = await fetch("https://sssg.shop/api/v1/admin/users/count-user");
  if (!res.ok) {
    throw new Error("Network Error");
  }
  const data = await res.json();

  return data.data.usersCount;
}

async function getMonthUserData() {
  const res = await fetch(
    "https://sssg.shop/api/v1/admin/users/count-monthly-assign"
  );
  if (!res.ok) {
    throw new Error("Network Error");
  }
  const data = await res.json();
  return data.data;
}

export default async function Page() {
  const userCountData = await getUserAllCountData();
  const data = await getMonthUserData();
  // async function handleSearchSubmit(formData: any) {
  //   "use server";
  //   console.log("검색");
  // }

  return (
    <main className={styles.userAllContainer}>
      <div className={styles.userInfoLayout}>
        <div className={styles.userInfoLayout1}>
          <div className={styles.userInfoContainer}>
            <div className={styles.userInfoCountainerE1}>
              <div className={styles.mainPageLeftHeaderElement1Count}>
                {userCountData}
              </div>
              <p>전체 회원 수</p>
            </div>

            <div className={styles.userInfoCountainerE3}>
              <Chart data={data} />
            </div>
          </div>
          <UserManage />
        </div>
        {/* 채팅 */}
        <div className={styles.userInfoLayout2}>
          <UserSearch />
          <div className={styles.userInfoLayout2Bottom}>
            <UserBlackList />
            <UserDeleteList />
          </div>
        </div>
      </div>
      <div className={styles.userListContainer}>
        <div className={styles.userListCategoryContainer}>
          <div className={styles.userListCategoryE1}>User List</div>
        </div>
        <div className={styles.userListLayout}>
          <div className={styles.userListTitle}>
            <div className={styles.userListTitleE1}>Index</div>
            <div className={styles.userListTitleE2}>Name</div>
            <div className={styles.userListTitleE3}>Info</div>
            <div className={styles.userListTitleE4}>Join</div>
            <div className={styles.userListTitleE5}>Status</div>
            <div className={styles.userListTitleE6}>BlackList</div>
            <div className={styles.userListTitleE7}>Delete</div>
          </div>
          <Scroll />
        </div>
      </div>
    </main>
  );
}
