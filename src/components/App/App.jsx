import React from "react";
import { useState } from "react";
import Basket from "../Basket/Basket";
import Card from "../Card/Card";
import Header from "../Header/Header";
import { data } from "../utils/data";
import styles from "./App.module.scss";

function App() {
  const [basketOpen, setBasketOpened] = useState(false);

  const handleBasketOpened = () => {
    setBasketOpened(!basketOpen);
  };

  return (
    <>
      <div className={`${styles.wrapper} clear`}>
        {basketOpen == true ? (
          <Basket closeBasket={handleBasketOpened} />
        ) : null}
        <Header openModal={handleBasketOpened} />
        <div className={`{styles.mainContent} p-40`}>
          <div className="d-flex justify-between mb-40">
            <h1>Все кроссовки</h1>
            <div className={styles.searchContainer}>
              <img
                className="pr-10 pl-10"
                src="/img/search.svg"
                alt="search"
              ></img>
              <input className={styles.search} placeholder="Поиск" />
            </div>
          </div>
          <div className={styles.cardContainer}>
            {data.map((e) => (
              <Card image={e.image} name={e.name} price={e.price}></Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
