import React from "react";
import styles from "./Order.module.scss";

const Order = ({ Orders }) => {
  return (
    <div className={styles.container}>
      {Orders.map((e, index) => (
        <div key={index} className={styles.ordersWrapper}>
          <img className={styles.imgOrder} src={e.image} />
          <p>{e.name.slice(17,60)}</p>
        </div>
      ))}
    </div>
  );
};

export default Order;
