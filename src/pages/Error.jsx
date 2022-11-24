import React from "react";
import styles from "../components/App/App.module.scss";
import imgArrow from "../img/arrow.svg";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className={styles.containerEmpty}>
      <Link className="d-flex flex-column align-center mb-50" to="/">
        <h1>Упс, мы попали куда-то не туда...</h1>
        <h3>Хотите вернуться в магазин?</h3>
        <button className={styles.backToShopButton}>
          Вернуться в магазин
          <img src={imgArrow} alt="arrow"></img>
        </button>
      </Link>
    </div>
  );
};

export default Error;
