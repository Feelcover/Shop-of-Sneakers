import React from 'react'
import styles from "./BasketInfo.module.scss";
import imgArrow from "../../../img/arrow.svg";



const BasketInfo = ({closeBasket, title, description, img}) => {
  return (
    <div className={styles.basketState}>
            <img className="" src={img} alt="Empty" />
            <h1>{title}</h1>
            <h3>{description}</h3>
            <button 
            className={styles.backToShopButton}
            onClick={closeBasket}
            >
            Вернуться в магазин
            <img src={imgArrow} alt="arrow"></img>
          </button>
          </div>
  )
}

export default BasketInfo