import React from "react";
import imgRemove from "../../../img/btn-remove.svg";
import styles from "./BasketItem.module.scss";

const BasketItem = ({ image, name, price, deleteItem }) => {
  return (
    <div className={styles.basketItem}>
      <img
        className="mr-20"
        width={70}
        height={65}
        src={image}
        alt="sneakers"
      ></img>

      <div className="mr-20">
        <p className="mb-5">{name}</p>
        <b>{price} руб.</b>
      </div>
      <button className={`${styles.removeButton} mr-5`} onClick={deleteItem}>
        <img className={styles.removeImg} src={imgRemove}></img>
      </button>
    </div>
  );
};

export default BasketItem;
