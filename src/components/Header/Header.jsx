import React from "react";
import { Link } from "react-router-dom";
import { getFavorites } from "../../utils/api";
import styles from "./Header.module.scss";
import imgLogo from "../../img/logo.png"
import imgCart from "../../img/cart.svg"
import imgFav from "../../img/favorites.svg"
import imgUser from "../../img/user.svg"



const Header = ({openModal}) => {
  return (
    <header
      className={`${styles.header} d-flex justify-between align-center p-40`}
    >
        <Link to='/'>

      <div className="d-flex align-center">
        <img className="mr-5 opacity-9" width={68} height={50} src={imgLogo} />
        <div>
          <h3>SNEAKERS SHOP</h3>
          <p className="opacity-6">Магазин кроссовок</p>
        </div>

      </div>
      </Link>
        
      <ul className="d-flex align-center">
        <li className="d-flex align-center mr-25" onClick={openModal}>
            <img className={`${styles.icons} mr-10`} width={18} height={18} src={imgCart} />
          <span className={styles.cartPrice}>1205 руб.</span>

        </li>
        <Link to="/Favorites">

        <li className="d-flex align-center">
          <img className={`${styles.icons} mr-25`} width={18} height={18} src={imgFav} />

        </li>
        </Link>

        <li className="d-flex align-center">
          <img className={styles.icons} width={18} height={18} src={imgUser} />

        </li>
      </ul>
    </header>
  );
};

export default Header;
