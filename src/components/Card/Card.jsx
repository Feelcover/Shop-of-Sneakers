import React from "react";
import { useState } from "react";
import styles from "./Card.module.scss";
import imgUnliked from "../../img/unliked.svg";
import imgLiked from "../../img/liked.svg";
import imgPlus from "../../img/plus.svg";
import imgChecked from "../../img/btn-checked.svg";

const Card = ({ image, name, price, onAddInBasket }) => {
  const [added, setAdded] = useState(false);
  const [liked, setliked] = useState(false);

  const handleAddClick = () => {
    if(!added){
    setAdded(true);
    onAddInBasket()
    }else{
    setAdded(false)
    }
  };
  const handleLikedClick = () => {
    setliked(!liked);
  };

  return (
    <div className={styles.card}>
      <button className={styles.buttonLike} onClick={handleLikedClick}>
        <img
          className={styles.like}
          src={liked ? imgLiked : imgUnliked}
          alt="like"
        ></img>
      </button>
      <img width={156} height={140} src={image} alt="sneakers"></img>
      <h5>{name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <p className="pt-10">Цена:</p>
          <b>{price} руб.</b>
        </div>
        <button className={styles.buttonAdd} onClick={handleAddClick}>
          <img
            className={added ? styles.buttonAddedImg : styles.buttonAddImg}
            width={11}
            height={11}
            src={added ? imgChecked : imgPlus}
            alt="img"
          ></img>
        </button>
      </div>
    </div>
  );
};

export default Card;
