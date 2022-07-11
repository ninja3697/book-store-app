import { useContext } from "react";
import { useRouter } from "next/router";
import { BasketContext } from "../contexts/basket.context";
import styles from "../styles/Header.module.scss";

const Basket = () => {
  const router = useRouter();
  const { totalCount } = useContext(BasketContext);

  const goToBasket = () => router.push("/basket");
  return (
    <div className={styles.basket}>
      <span className={styles.itemCount}>
        {totalCount > 0 ? `${totalCount} item(s)` : "empty"}
      </span>
      <button onClick={goToBasket} className={styles.button}>
        VIEW BASKET
      </button>
    </div>
  );
};

export default Basket;
