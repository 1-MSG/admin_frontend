"use client";

import React, { useRef, useState, useEffect } from "react";
import { QueryClient, useInfiniteQuery } from "@tanstack/react-query";
import Image from "next/image";
import src from "@/assets/image/tempProduct/tempProduct.png";
import styles from "@/styles/product.module.css";
interface ScrollProps {
  keyword: string; // 부모 컴포넌트에서 전달되는 검색어
}
export default function Scroll({ keyword }: ScrollProps) {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchPosts = async ({ pageParam = 1 }: { pageParam?: number }) => {
    try {
      const response = await fetch(
        `https://sssg.shop/api/v1/search?keyword=${keyword}&pageable=${pageParam}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }

      const data = await response.json();
      console.log("준표", data);

      //이건 가짜
      const products = data.data.searchProductDtos.map(
        (item: { productId: any }) => item.productId
      );

      console.log("준표한테 받은 데이터 > 이현님", products);

      const data1 = await fetch(
        `https://sssg.shop/api/v1/products?productIds=${JSON.stringify(
          products
        )}`
      );
      const data2 = await data1.json();
      console.log("최종적으로 보내는ㄴ api", data2);

      return data2;

      //이게 진짜
      // return data.data.searchProductDtos;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
    queryKey: ["posts", keyword],
    queryFn: fetchPosts,
    initialPageParam: 1,
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

  const products = data ? data.pages.flatMap((page) => page) : [];

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
      rootMargin: "0px",
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

  return (
    <div className={styles.productPageListContainerContainer}>
      {products.map((product, index) => (
        <div key={index} className={styles.productPageListContainerElement}>
          <div className={styles.productPageListImageContainer}>
            <Image src={src} style={{ width: "100%", height: "100%" }} alt="" />
          </div>
          <div className={styles.productPageListContainerElementInfo}>
            <div className={styles.productPageListTitle}>{product.name}</div>
            <div className={styles.productPageListMaker}>{product.maker}</div>
            <div className={styles.productPageListPrice}>{product.price}</div>
            <div className={styles.productPageListReview}>
              {product.reviewCount}
            </div>
            <div className={styles.productPageBtnContainer}>
              <button>Search</button>
              <button>Edit</button>
              <button>Delete</button>
            </div>
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
