import React from "react";

const Basket = () => {
  return (
    <div className="basketOverlay">
      <div className="basket">
        <div className="basketContainer">
          <h2 className="mb-30 d-flex justify-between">
            Корзина
            <button className="buttonCloseBasket">
              <img
                width={40}
                height={40}
                src="/img/close.png"
                alt="close"
              ></img>
            </button>
          </h2>
          <div className="basketItems">
            <div className="basketItem">
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
              <button className="removeButton mr-5">
                <img className="removeImg" src="/img/btn-remove.svg"></img>
              </button>
            </div>
            <div className="basketItem">
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
              <button className="removeButton mr-5">
                <img className="removeImg" src="/img/btn-remove.svg"></img>
              </button>
            </div>
          </div>
        </div>

        <div className="checkout">
          <ul className="total">
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

          <button className="checkoutButton">
            Оформить заказ
            <img src="/img/arrow.svg" alt="arrow"></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
