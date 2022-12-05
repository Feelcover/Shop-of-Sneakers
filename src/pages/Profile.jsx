import React from 'react'
import styles from "../components/App/App.module.scss";
import { Link } from "react-router-dom";
import imgBanner from "../img/banner.jpg";


const Profile = () => {
  return (
    <div className={styles.mainContent}>
    <img className={styles.banner} src={imgBanner} alt="banner" />
    <div className={styles.mainContainer}>
      <h1>
        Ваш Профиль
      </h1>

      <Link to="/">
            <div className={styles.containerEmpty}>
              <button className={styles.backToShopButton}>
                Вернуться в магазин
              </button>
            </div>
          </Link>
    </div>
  </div>
  )
}

export default Profile