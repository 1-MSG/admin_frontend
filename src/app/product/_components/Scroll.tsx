"use client";

import React, { useRef, useState, useEffect } from "react";
import { QueryClient, useInfiniteQuery } from "@tanstack/react-query";
import Image from "next/image";
import src from "@/assets/image/tempProduct/tempProduct.png";
import styles from "@/styles/product.module.css";
import Link from "next/link";
interface ScrollProps {
  keyword: string; // 부모 컴포넌트에서 전달되는 검색어
}
export default function Scroll({ keyword }: ScrollProps) {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchPosts = async ({ pageParam = 1 }: { pageParam?: number }) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/search?keyword=${keyword}&page=${pageParam}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }

      const data = await response.json();

      const products = data.data.searchProductDtos.map(
        (item: { productId: any }) => item.productId
      );

      if (products.length === 0) {
        return [];
      }
      const queryString = products
        .map((id: any) => `productIds=${id}`)
        .join("&");

      const data1 = await fetch(
        `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/products?${queryString}`
      );
      const data2 = await data1.json();

      return data2.data;
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
      if (!lastPage || lastPage.length < 5) {
        return undefined;
      }
      return allPages.length + 1;
    },
  });

  const products = data ? data.pages.flatMap((page) => page) : [];
  console.log(products);

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting && hasNextPage && !isFetching && !isLoadingMore) {
      setIsLoadingMore(true);
      fetchNextPage();
    }
  };

  console.log("hello");

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
      {products.map((product: any, index: any) => (
        <div key={index} className={styles.productPageListContainerElement}>
          <div className={styles.productPageListImageContainer}>
            <img
              src={product.productImage}
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
          </div>
          <div className={styles.productPageListContainerElementInfo}>
            <div className={styles.productPageListTitle}>
              {product.productName.length > 17
                ? product.productName.substring(0, 17) + "..."
                : product.productName}
            </div>
            <div className={styles.productPageListMaker}>
              {product.brandName}
            </div>
            <div className={styles.productPageListPrice}>
              {product.productPrice}
            </div>
            <div className={styles.productPageListReview}>
              {product.reviewCount}
            </div>
            <div className={styles.productPageBtnContainer}>
              <Link
                href={`https://ssgcom-app.vercel.app/product-detail/productId?productId=${product.brandId}`}
              >
                <button>Search</button>
              </Link>
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
