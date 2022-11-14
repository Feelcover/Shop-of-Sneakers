import React from "react";
import { useState } from "react";
import styles from "./Card.module.scss";
import imgUnliked from "../../img/unliked.svg"
import imgLiked from "../../img/liked.svg"
import imgPlus from "../../img/plus.svg"
import imgChecked from "../../img/btn-checked.svg"



const Card = ({ image, name, price }) => {
  const [added, setAdded] = useState(false);
  const [liked, setliked] = useState(false);

  const handleAddClick = () => {
    setAdded(!added);
  };
  const handleLikedClick = () => {
    setliked(!liked);
  };

  return (
    <div className={styles.card}>
      <button className={styles.buttonLike} onClick={handleLikedClick}>
        <img
          className={styles.like}
          src={liked == false ? imgUnliked : imgLiked}
          alt="like"
        ></img>
      </button>
      <img width={133} height={133} src={image} alt="sneakers"></img>
      <h5>{name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <p className="pt-10">Цена:</p>
          <b>{price} руб.</b>
        </div>
        <button className={styles.buttonAdd} onClick={handleAddClick}>
          <img
            className={
              added == false ? styles.buttonAddImg : styles.buttonAddedImg
            }
            width={11}
            height={11}
            src={added == false ? imgPlus : imgChecked}
            alt="img"
          ></img>
        </button>
      </div>
    </div>
  );
};

export default Card;
