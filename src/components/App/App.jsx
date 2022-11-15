import React from "react";
import { useState, useEffect } from "react";
import Basket from "../Basket/Basket";
import Card from "../Card/Card";
import Header from "../Header/Header";
// import { data } from "../../utils/data";
import styles from "./App.module.scss";
import imgSearch from "../../img/search.svg";

function App() {

  const [items, setItems] = useState([])
  const [basketOpen, setBasketOpened] = useState(false);


  const handleBasketOpen = () => {
    setBasketOpened(true);
  };
  const handleBasketClose = () => {
    setBasketOpened(false);
  };

  useEffect(() => {
    fetch('https://6373698a348e9472990bb74f.mockapi.io/Items')
    .then((res) => {
    return res.json()})
    .then((json) =>{
      setItems(json);
    })
  }, [])

  return (
    <>
      <div className={`${styles.wrapper} clear`}>
        {basketOpen && <Basket closeBasket={handleBasketClose} />}
        <Header openModal={handleBasketOpen} />
        <div className={`{styles.mainContent} p-40`}>
          <div className="d-flex justify-between align-center mb-40">
            <h1>Все кроссовки</h1>
            <div className={styles.searchContainer}>
              <img className="pr-10 pl-10" src={imgSearch} alt="search"></img>
              <input className={styles.search} placeholder="Поиск" />
            </div>
          </div>
          <div className={styles.cardContainer}>
            {items.map((e) => (
              <Card image={e.image} name={e.name} price={e.price}></Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
