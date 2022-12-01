import React from "react";
import ContentLoader from "react-content-loader";
import { useState } from "react";
import styles from "./Card.module.scss";
import imgUnliked from "../../img/unliked.svg";
import imgLiked from "../../img/liked.svg";
import imgPlus from "../../img/plus.svg";
import imgChecked from "../../img/btn-checked.svg";
import { useEffect, useContext } from "react";
import AppContext from "../../utils/data";

const Card = ({
  image,
  name,
  price,
  onAddInBasket,
  onAddInFavorites,
  onDeleteInFavorites,
  onDeleteInBasket,
  isLoading,
}) => {
  
  const {isAdded, isFavorite, basketItems} = useContext(AppContext);

  const handleAddClick = () => {
    if (isAdded(name)) {
      onDeleteInBasket();
    } else {
      onAddInBasket();
    }
  };

  const handleLikedClick = () => {
    if (isFavorite(name)) {
      onDeleteInFavorites();
    } else {
      onAddInFavorites();
    }
  };


  return (
    <div className={styles.card}>
      {isLoading ? (
        <ContentLoader
          speed={2}
          width={150}
          height={235}
          viewBox="0 0 150 235"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="3" rx="10" ry="10" width="150" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="150" height="31" />
          <rect x="0" y="211" rx="5" ry="5" width="100" height="25" />
          <rect x="125" y="211" rx="5" ry="5" width="25" height="25" />
        </ContentLoader>
      ) : (
        <>
          <button className={styles.buttonLike} onClick={handleLikedClick}>
            <img
              className={styles.like}
              src={isFavorite(name) ? imgLiked : imgUnliked}
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
                className={isAdded(name) ? styles.buttonAddedImg : styles.buttonAddImg}
                width={11}
                height={11}
                src={isAdded(name) ? imgChecked : imgPlus}
                alt="img"
              ></img>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
