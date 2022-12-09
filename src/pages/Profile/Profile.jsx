import { useEffect, useState } from "react";
import styles from "./Profile.module.scss";
import { Link } from "react-router-dom";
import imgBanner from "../../img/banner.jpg";
import imgRemove from "../../img/btn-remove.svg";
import imgArrow from "../../img/arrow.svg";
import { getOrders } from "../../utils/api";
import Order from "../../components/Order/Order";
import { postDeleteBasketOrder } from "../../utils/api";

const Profile = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    (async () => {
      await getOrders(setOrders);
    })();
  }, []);

  const handleDeleteInOrders = (id) => {
    console.log(id);
    postDeleteBasketOrder(id);
    setOrders(orders.filter((orderItem) => orderItem.id !== id));
  };

  return (
    <div className={styles.mainContent}>
      <img className={styles.banner} src={imgBanner} alt="banner" />
      <div className={styles.mainContainer}>
        <h1>Ваши заказы</h1>
        <div className={styles.cardContainer}>
          {orders.map(({ Orders, id, Time }) => (
            <div key={id} className={styles.orderWrapper}>
              <h2>Заказ №{id}</h2>
              <p className={styles.orderTime}>{Time}</p>
              <Order id={id} Orders={Orders} />
              <img
                className={styles.orderDelete}
                src={imgRemove}
                onClick={() => handleDeleteInOrders(id)}
              ></img>
            </div>
          ))}
        </div>
        {orders.length === 0 && (
          <Link to="/">
            <div className={styles.containerEmpty}>
              <h1>У вас ещё не было заказов</h1>
              <h3>Хотите что-нибудь купить?</h3>
              <button className={styles.backToShopButton}>
                Вернуться в магазин
                <img src={imgArrow} alt="arrow"></img>
              </button>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Profile;
