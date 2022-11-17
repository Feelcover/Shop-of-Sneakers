import { useEffect } from "react";
import styles from "./Basket.module.scss";
import imgClose from "../../img/close.png";
import imgArrow from "../../img/arrow.svg";
import BasketItem from "./BasketItem/BasketItem";

const Basket = ({ closeBasket, basketAddedItems = [], basketDeleteItems}) => {
  useEffect(() => {
    function handleEscKeydown(evt) {
      if (evt.key === "Escape") {
        closeBasket();
      }
    }
    document.addEventListener("keydown", handleEscKeydown);
    return () => {
      document.removeEventListener("keydown", handleEscKeydown);
    };
  }, []);

  // const uniqueArr = (arr) => {
  //   return Array.from(new Set(arr));
  // }

  return (
    <div
      className={styles.basketOverlay}
      onClick={(e) => e.currentTarget === e.target && closeBasket()}
    >
      <div className={styles.basket}>
        <div className={styles.basketContainer}>
          <h2 className="mb-30 d-flex justify-between">
            Корзина
            <button className={styles.buttonCloseBasket} onClick={closeBasket}>
              <img width={40} height={40} src={imgClose} alt="close"></img>
            </button>
          </h2>
          <div className={styles.basketItems}>
            {basketAddedItems.map((e) => (
              <BasketItem
                key={e.id}
                image={e.image}
                name={e.name}
                price={e.price}
                deleteItem={()=>basketDeleteItems(e.id)}
              ></BasketItem>
            ))}
          </div>
        </div>

        <div className={styles.checkout}>
          <ul className={styles.total}>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>17598 руб.</b>
            </li>
            <li>
              <span>Налог 20%:</span>
              <div></div>
              <b>4400 руб.</b>
            </li>
          </ul>

          <button className={styles.checkoutButton}>
            Оформить заказ
            <img src={imgArrow} alt="arrow"></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
