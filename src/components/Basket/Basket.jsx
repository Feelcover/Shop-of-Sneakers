import { useEffect, useContext, useState } from "react";
import styles from "./Basket.module.scss";
import imgClose from "../../img/close.png";
import imgArrow from "../../img/arrow.svg";
import imgEmpty from "../../img/empty-cart.jpg";
import imgComplete from "../../img/complete-order.jpg";
import BasketItem from "./BasketItem/BasketItem";
import BasketInfo from "./BasketInfo/BasketInfo";
import AppContext from "../../utils/data";
// import {postAddBasketOrder} from "../../utils/api"
import axios from "axios";
const Basket = ({ closeBasket, basketDeleteItems }) => {
  const [isCheckoutComplete, setIsCheckoutComplete] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const { basketItems, setBasketItems } = useContext(AppContext);

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

  const SendCheckout = async () => {
    const { data } = await axios.post(
      "https://6373698a348e9472990bb74f.mockapi.io/Orders",
      basketItems
    );
    setOrderId(data.id);
    setBasketItems([]);
    setIsCheckoutComplete(true);
  };

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
          {basketItems.length !== 0 ? (
            <div className={styles.basketItems}>
              {basketItems.map((e) => (
                <BasketItem
                  key={e.id}
                  image={e.image}
                  name={e.name}
                  price={e.price}
                  deleteItem={() => basketDeleteItems(e)}
                ></BasketItem>
              ))}
            </div>
          ) : (
            <BasketInfo
              closeBasket={closeBasket}
              title={
                isCheckoutComplete
                  ? `Заказ №${orderId} оформлен!`
                  : "Вы ничего не добавили"
              }
              description={
                isCheckoutComplete
                  ? "Скоро курьерская доставка получит ваш заказ"
                  : "Добавьте минимум одну пару, чтобы сделать заказ"
              }
              img={isCheckoutComplete ? imgComplete : imgEmpty}
            />
          )}
        </div>
        {basketItems.length !== 0 && (
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

            <button className={styles.checkoutButton} onClick={SendCheckout}>
              Оформить заказ
              <img src={imgArrow} alt="arrow"></img>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
