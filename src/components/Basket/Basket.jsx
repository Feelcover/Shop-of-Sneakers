import { useEffect, useContext, useState } from "react";
import styles from "./Basket.module.scss";
import imgClose from "../../img/close.png";
import imgArrow from "../../img/arrow.svg";
import imgEmpty from "../../img/empty-cart.jpg";
import imgComplete from "../../img/complete-order.jpg";
import BasketItem from "./BasketItem/BasketItem";
import BasketInfo from "./BasketInfo/BasketInfo";
import AppContext from "../../utils/data";
import axios from "axios";
import { usePrice } from "../../hooks/usePrice";
const Basket = ({ closeBasket }) => {
  const [isCheckoutComplete, setIsCheckoutComplete] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { handleDeleteInBasket } = useContext(AppContext);
  const { basketItems, setBasketItems, CartPrice } = usePrice();

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

  const delayRequest = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const SendCheckout = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://6373698a348e9472990bb74f.mockapi.io/Orders",
        { Orders: basketItems }
      );
      setOrderId(data.id);
      for (let i = 0; i < basketItems.length; i++) {
        const item = basketItems[i];
        handleDeleteInBasket(item);
        delayRequest(200);
      }
      setBasketItems([]);
      setIsCheckoutComplete(true);
    } catch {
      alert("Не удалось создать заказ");
    }
    setIsLoading(false);
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
                  deleteItem={() => handleDeleteInBasket(e)}
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
                <b>{CartPrice} руб.</b>
              </li>
            </ul>
            <button
              disabled={isLoading}
              className={styles.checkoutButton}
              onClick={SendCheckout}
            >
              {isLoading ? (
                <>
                  <div className={styles.loader} />
                  <p className={styles.loaderText}>Заказ оформляется...</p>
                </>
              ) : (
                "Оформить заказ"
              )}
              {!isLoading && <img src={imgArrow} alt="arrow"></img>}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
