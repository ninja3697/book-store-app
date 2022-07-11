import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Basket from "./basket";
import styles from "../styles/Header.module.scss";

const Header = () => {
  const { pathname } = useRouter();
  const isBasketRoute = pathname.includes("basket");

  return (
    <header className={styles.header}>
      <span className={styles.logo}>
        <Image
          src="/assets/logo.jpg"
          alt="Book Store"
          width={232}
          height={84}
        />
      </span>
      {!isBasketRoute && (
        <div className={styles.basket_wrapper}>
          <Basket />
        </div>
      )}
    </header>
  );
};

export default Header;
