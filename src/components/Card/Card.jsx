import React from "react";
import styles from './Card.module.scss'

const Card = ({image, name, price}) => {


  return (
    <div className={styles.card}>
      <button className={styles.buttonLike}>
        <img className={styles.like} src="/img/liked.svg" alt="like"></img>
      </button>
      <img
        width={133}
        height={133}
        src={image}
        alt="sneakers"
      ></img>
      <h5>{name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <p className="pt-10">Цена:</p>
          <b>{price} руб.</b>
        </div>
        <button className={styles.buttonAdd}>
          <img width={11} height={11} src="/img/plus.svg" alt="img"></img>
        </button>
      </div>
    </div>
  );
};

export default Card;
