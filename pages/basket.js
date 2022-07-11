import { useContext } from "react";
import { useRouter } from "next/router";

import { BasketContext } from "../contexts/basket.context";
import styles from "../styles/Basket.module.scss";

const BasketView = () => {
  const { totalCount, itemsMap, removeItemFromBasket } =
    useContext(BasketContext);
  const router = useRouter();

  const goToHomepage = () => router.push("/");

  const removeBookFromBasket = (id) => {
    removeItemFromBasket({ id });
  };

  const onPayClick = () => {
    console.log(
      Object.entries(itemsMap).map(([id, { count }]) => ({
        id,
        quantity: count,
      }))
    );
  };

  return (
    <div className={styles.basketView}>
      <span onClick={goToHomepage} className={styles.link}>
        {"<"} Go Back To Homepage
      </span>
      <div className={styles.basketSummary}>
        <h1 style={styles.title}>Basket Summary</h1>
        {totalCount > 0 ? (
          <>
            <ul className={styles.basketList}>
              {Object.entries(itemsMap).map(([id, { title, count }]) => (
                <li key={id}>
                  {title} x {count}
                  <span
                    className={styles.remove}
                    onClick={() => removeBookFromBasket(id)}
                  >
                    Remove
                  </span>
                </li>
              ))}
            </ul>
            <button className={styles.button} onClick={onPayClick}>
              PAY
            </button>
          </>
        ) : (
          <div>No items there in the cart</div>
        )}
      </div>
    </div>
  );
};

export default BasketView;
