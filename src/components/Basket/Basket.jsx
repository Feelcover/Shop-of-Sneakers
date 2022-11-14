import React from "react";
import styles from "./Basket.module.scss"

const Basket = ({closeBasket}) => {
  return (
    <div className={styles.basketOverlay}>
      <div className={styles.basket}>
        <div className={styles.basketContainer}>
          <h2 className="mb-30 d-flex justify-between">
            Корзина
            <button className={styles.buttonCloseBasket}
            onClick={closeBasket}>
              <img
                width={40}
                height={40}
                src="/img/close.png"
                alt="close"
              ></img>
            </button>
          </h2>
          <div className={styles.basketItems}>

            <div className={styles.basketItem}>
              <img
                className="mr-20"
                width={70}
                height={65}
                src="/img/sneakers/1.jpg"
                alt="sneakers"
              ></img>

              <div className="mr-20">
                <p className="mb-5">
                  Мужские Кроссовки Nike Blazer Mid Suede Green
                </p>
                <b>10999 руб.</b>
              </div>
              <button className={`${styles.removeButton} mr-5`}>
                <img className={styles.removeImg} src="/img/btn-remove.svg"></img>
              </button>
            </div>

            <div className={styles.basketItem}>
              <img
                className="mr-20"
                width={70}
                height={65}
                src="/img/sneakers/1.jpg"
                alt="sneakers"
              ></img>

              <div className="mr-20">
                <p className="mb-5">
                  Мужские Кроссовки Nike Blazer Mid Suede Green
                </p>
                <b>10999 руб.</b>
              </div>
              <button className={`${styles.removeButton} mr-5`}>
                <img className={styles.removeImg} src="/img/btn-remove.svg"></img>
              </button>
            </div>

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
            <img src="/img/arrow.svg" alt="arrow"></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
