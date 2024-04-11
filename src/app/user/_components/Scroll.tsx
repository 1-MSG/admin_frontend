"use client";

import React, { useRef, useState, useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import styles from "@/styles/user.module.css";

export default function Scroll() {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchPosts = async ({ pageParam = 0 }: { pageParam?: number }) => {
    try {
      const response = await fetch(
        `https://sssg.shop/api/v1/admin/users/search-all?page=${pageParam}&size=5`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }

      const data = await response.json();
      console.log(data.data);
      return data.data;

      //이게 진짜
      // return data.data.searchProductDtos;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
    queryKey: ["users"],
    queryFn: fetchPosts,
    initialPageParam: 0,
    staleTime: 1000 * 20 * 20,
    gcTime: 300 * 1000,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < 5) {
        return undefined;
      }
      return allPages.length + 1;
    },
  });

  // console.log("캐시된 데이터:", data); // 콘솔에 캐시된 데이터를 확인합니다.

  const userListData = data ? data.pages.flatMap((page) => page) : [];
  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting && hasNextPage && !isFetching && !isLoadingMore) {
      setIsLoadingMore(true);
      fetchNextPage();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "100px",
      threshold: 1.0,
    });

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, [handleObserver]);

  useEffect(() => {
    if (!isFetching) {
      setIsLoadingMore(false);
    }
  }, [isFetching]);

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
    <div className={styles.userListScroll}>
      {userListData.map((userData: any, index: number) => (
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
      <div ref={sentinelRef} className="sentinel"></div>
      <div className="loading-indicator">
        {isFetching ? "Fetching..." : isLoadingMore ? "Loading more..." : null}
      </div>
    </div>
  );
}
