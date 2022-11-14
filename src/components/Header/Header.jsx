import React from "react";
import styles from "./Header.module.scss";

const Header = ({openModal}) => {
  return (
    <header
      className={`${styles.header} d-flex justify-between align-center p-40`}
    >
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" />
        <div>
          <h3>SNEAKERS SHOP</h3>
          <p className="opacity-6">Магазин кроссовок</p>
        </div>
      </div>

      <ul className="d-flex align-center">
        <li className="d-flex align-center mr-30">
          <button onClick={openModal}>
            <img width={18} height={18} src="/img/cart.svg" />
          </button>
          <span>1205 руб.</span>
        </li>
        <li className="mr-10">
          <button>
          <img width={18} height={18} src="/img/favorites.svg" />

          </button>
          <span></span>
        </li>
        <li>
          <button>
          <img width={18} height={18} src="/img/user.svg" />

          </button>
          <span></span>
        </li>
      </ul>
    </header>
  );
};

export default Header;
