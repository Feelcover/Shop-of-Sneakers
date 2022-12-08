import React,{useContext, useEffect, useState} from "react";
import styles from "./Profile.module.scss";
import { Link } from "react-router-dom";
import imgBanner from "../../img/banner.jpg";
import AppContext from "../../utils/data"
import ContentLoader from "react-content-loader";
import { getOrders } from "../../utils/api";
import Order from "../../components/Order/Order";


const Profile = () => {

  const [orders, setOrders] = useState([]);
  const {basketItems, searchFilter} = useContext(AppContext);
  useEffect(()=>{
    (async() =>{
    await getOrders(setOrders);
    })()
  },[])


  return (
    <div className={styles.mainContent}>
      <img className={styles.banner} src={imgBanner} alt="banner" />
      <div className={styles.mainContainer}>
        <h1>Ваши заказы</h1>
        <div className={styles.cardContainer}>
        {orders.map(({Orders, id}) => (
          <div key={id} className={styles.orderWrapper}>
            <h2>Заказ №{id}</h2>
          <Order id={id} Orders={Orders}/>
           </div>
        ))}
    </div>
        {/* {isLoading ? (
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
         <div></div>
        </>
      )}
{basketItems.length === 0 && <Link to="/">
          <div className={styles.containerEmpty}>
            <button className={styles.backToShopButton}>
              Вернуться в магазин
            </button>
          </div>
        </Link>} */}
      </div>
    </div>
  );
};

export default Profile;
