import React from "react";
import { useState, useEffect } from "react";
import Basket from "../Basket/Basket";
import Card from "../Card/Card";
import Header from "../Header/Header";
// import { data } from "../../utils/data";
import styles from "./App.module.scss";
import imgSearch from "../../img/search.svg";
import imgClose from "../../img/close.png";
import axios from "axios"
import { getBasketItems, getItems } from "../../utils/api";


function App() {
  const [items, setItems] = useState([]);
  const [basketItems, setBasketItems] = useState([]);
  const [basketOpen, setBasketOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleBasketOpen = () => {
    getBasketItems(setBasketItems)     
    setBasketOpened(true);
  };
  const handleBasketClose = () => {
    setBasketOpened(false);
  };
  const handleAddInBasket = (item) => {
    axios.post("https://6373698a348e9472990bb74f.mockapi.io/Basket", item)
    setBasketItems((prev) => [...prev, item]);
  };
  const handleDeleteInBasket = (id) => {
    console.log(id);
    axios.delete(`https://6373698a348e9472990bb74f.mockapi.io/Basket/${id}`)
    setBasketItems(basketItems.filter((item) => item.id != id));

  };

  const handleChangeSearchInput = (evt) => {
    setSearchValue(evt.target.value);
  };
  const handleChangeSearchInputClear = () => {
    setSearchValue("");
  };

  useEffect(() => {
    getItems(setItems)
    getBasketItems(setBasketItems)     
    }, []);

  function searchFilter(arr) {
    return arr.filter((e) => e.name.toLowerCase().includes(searchValue));
  }

  return (
    <>
      <div className={`${styles.wrapper} clear`}>
        {basketOpen && (
          <Basket
            closeBasket={handleBasketClose}
            basketAddedItems={basketItems}
            basketDeleteItems={handleDeleteInBasket}
          />
        )}
        <Header openModal={handleBasketOpen} />
        <div className={`{styles.mainContent} p-40`}>
          <div className="d-flex justify-between align-center mb-40">
            <h1>
              {searchValue
                ? `Поиск по запросу: ${searchValue}`
                : "Все кроссовки"}
            </h1>
            <div className={styles.searchContainer}>
              <img className="pr-10 pl-10" src={imgSearch} alt="search"></img>
              <input
                value={searchValue}
                className={styles.search}
                placeholder="Поиск"
                onChange={handleChangeSearchInput}
              />
              {searchValue && (
                <img
                  className={styles.clearSearch}
                  src={imgClose}
                  alt="close"
                  onClick={handleChangeSearchInputClear}
                ></img>
              )}
            </div>
          </div>
          <div className={styles.cardContainer}>
            {searchFilter(items).map((e, index) => (
              <Card
                key={index}
                image={e.image}
                name={e.name}
                price={e.price}
                onAddInBasket={() => {
                  handleAddInBasket(e);
                }}
              ></Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
