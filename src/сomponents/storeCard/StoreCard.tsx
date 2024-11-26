import React, { useState } from "react";
import { IProduct } from "../storePage/StorePage";
import styles from "./storeCard.module.css";

export default function StoreCard() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const getStoreCard = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setProducts(data.products);
  };

  getStoreCard();

  return (
    <div className={styles.storeCardContainer}>
      {/* <h2>StoreCard</h2> */}
      {products.map((product) => (
        <div className={styles.storeContainerCard} key={product.id}>
          {product.id}
          <h3>{product.title}</h3>
          <div className={styles.imgWrapper}>
            <img width={100} src={product.images[0]} alt="" />

            <p> {product.category}</p>
            <h3>{product.price}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
