import styles from "@/styles/user.module.css";
import UserManage from "./_components/UserManage";
import { FaSearch } from "react-icons/fa";
import Chart from "@/app/user/_components/Chart";

export default function Page() {
  async function handleSearchSubmit(formData: any) {
    "use server";
    console.log("검색");
  }

  const userListData = Array.from({ length: 50 }, (_, i) => ({
    index: i + 1,
    name: "조윤찬",
    email: "whdbscks77@gmail.com",
    info: "간편 회원가입",
    status: "✅",
  }));

  const UserListEntry = ({ data }: { data: any }) => (
    <div className={styles.userListE}>
      <div className={styles.userListE1}>{data.index}</div>
      <div className={styles.userListE2}>{data.name}</div>
      <div className={styles.userListE3}>{data.email}</div>
      <div className={styles.userListE4}>{data.info}</div>
      <div className={styles.userListE5}>{data.status}</div>
      <div className={styles.userListE6}>
        <button>Black List</button>
      </div>
      <div className={styles.userListE7}>
        <button>Delete</button>
      </div>
    </div>
  );

  return (
    <main className={styles.userAllContainer}>
      <div className={styles.userInfoLayout}>
        <div className={styles.userInfoLayout1}>
          <div className={styles.userInfoContainer}>
            <div className={styles.userInfoCountainerE1}>
              <div className={styles.mainPageLeftHeaderElement1Count}>2024</div>
              <p>전체 회원 수</p>
            </div>

            <div className={styles.userInfoCountainerE3}>
              <Chart />
            </div>
          </div>
          <UserManage />
        </div>
        <div className={styles.userInfoLayout2}>판도라의 상자</div>
      </div>
      <div className={styles.userListContainer}>
        <div className={styles.userListCategoryContainer}>
          <div className={styles.userListCategoryE1}>User List</div>
          <div className={styles.userListCategoryE2}>All</div>
          <div className={styles.userListCategoryE3}>BlackList</div>
        </div>
        <div className={styles.userListLayout}>
          <form className={styles.userPageForm} onSubmit={handleSearchSubmit}>
            <input className={styles.userPageSearchContainerInput}></input>
            <button className={styles.userPageSearchContainerBtn}>
              <FaSearch size={10} />
            </button>
          </form>
          <div className={styles.userListTitle}>
            <div className={styles.userListTitleE1}>Index</div>
            <div className={styles.userListTitleE2}>Name</div>
            <div className={styles.userListTitleE3}>Info</div>
            <div className={styles.userListTitleE4}>Join</div>
            <div className={styles.userListTitleE5}>Status</div>
            <div className={styles.userListTitleE6}>BlackList</div>
            <div className={styles.userListTitleE7}>Delete</div>
          </div>
          <div className={styles.userListScroll}>
            {userListData.map((userData: any, index: number) => (
              <UserListEntry key={index} data={userData} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
