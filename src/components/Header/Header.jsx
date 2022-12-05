import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import imgLogo from "../../img/logo.png";
import imgCart from "../../img/cart.svg";
import imgFav from "../../img/favorites.svg";
import imgUser from "../../img/user.svg";
import AppContext from "../../utils/data";
import { usePrice } from "../../hooks/usePrice"

const Header = ({ openModal }) => {
  const location = useLocation();
  const {basketItems, setBasketItems, CartPrice} = usePrice();



  return (
    <header
      className={`${styles.header} d-flex justify-between align-center p-40`}
    >
      <Link to="/">
        <div className={styles.logo}>
          <img
            className="mr-5 opacity-9"
            width={68}
            height={50}
            src={imgLogo}
          />
          <div>
            <h3>SNEAKERS SHOP</h3>
            <p className="opacity-6">Магазин кроссовок</p>
          </div>
        </div>
      </Link>

      <ul className="d-flex align-center">
        <li className="d-flex align-center mr-25" onClick={openModal}>
          <img
            className={`${styles.icons} mr-10`}
            width={18}
            height={18}
            src={imgCart}
          />
          <span className={styles.cartPrice}>{CartPrice} руб.</span>
        </li>
        <Link to="/Favorites">
          <li className="d-flex align-center">
            <img
              className={
                location.pathname === "/Favorites"
                  ? `${styles.currentIcons} mr-25`
                  : `${styles.icons} mr-25`
              }
              width={18}
              height={18}
              src={imgFav}
            />
          </li>
        </Link>
        <Link to="/Profile">
          <li className="d-flex align-center">
            <img
              className={
                location.pathname === "/Profile"
                  ? styles.currentIcons
                  : styles.icons
              }
              width={18}
              height={18}
              src={imgUser}
            />
          </li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
