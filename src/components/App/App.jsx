import React from "react";
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Basket from "../Basket/Basket";
import Header from "../Header/Header";
import Home from "../../pages/Home";
import Favorites from "../../pages/Favorites"
// import { data } from "../../utils/data";
import styles from "./App.module.scss";


import {
  getBasketItems,
  getItems,
  postAddBasketItems,
  postAddInFavorite,
  postDeleteBasketItems,
  postDeleteInFavorites,
} from "../../utils/api";

function App() {
  const [items, setItems] = useState([]);
  const [basketItems, setBasketItems] = useState([]);
  const [basketOpen, setBasketOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [favorites, setFavorites] = useState([]);

  const handleBasketOpen = () => {
    getBasketItems(setBasketItems);
    setBasketOpened(true);
  };
  const handleBasketClose = () => {
    setBasketOpened(false);
  };
  const handleAddInBasket = (item) => {
    postAddBasketItems(item);
    setBasketItems((prev) => [...prev, item]);
  };
  const handleDeleteInBasket = (id) => {
    postDeleteBasketItems(id);
    setBasketItems(basketItems.filter((item) => item.id != id));
  };

  const handleAddInFavorites = (item) => {
    postAddInFavorite(item)
    setFavorites((prev) => [...prev, item]);
  };
  const handleDeleteInFavorites = (id) => {
    console.log(id);

    postDeleteInFavorites(id);
    // setFavorites(favorites.filter((item) => item.id != id));
  };

  const handleChangeSearchInput = (evt) => {
    setSearchValue(evt.target.value);
  };
  const handleChangeSearchInputClear = () => {
    setSearchValue("");
  };
  function searchFilter(arr) {
    return arr.filter((e) => e.name.toLowerCase().includes(searchValue));
  }

  useEffect(() => {
    getItems(setItems);
  }, []);

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
        <Header 
        openModal={handleBasketOpen}
        setFavorites = {setFavorites}
        />
          <Route path="/" exact>
          <Home
          items = {items}
          searchValue = {searchValue}
          handleChangeSearchInput = {handleChangeSearchInput}
          handleChangeSearchInputClear = {handleChangeSearchInputClear}
          searchFilter = {searchFilter}
          handleAddInBasket = {handleAddInBasket}
          favorites = {favorites}
          handleAddInFavorites = {handleAddInFavorites}
          handleDeleteInFavorites = {handleDeleteInFavorites}
          
          />
          </Route>
          <Route path="/Favorites">
          <Favorites
          items = {items}
          searchValue = {searchValue}
          handleChangeSearchInput = {handleChangeSearchInput}
          handleChangeSearchInputClear = {handleChangeSearchInputClear}
          searchFilter = {searchFilter}
          handleAddInBasket = {handleAddInBasket}
          favorites = {favorites}
          handleAddInFavorites = {handleAddInFavorites}
          handleDeleteInFavorites = {handleDeleteInFavorites}
          setFavorites={setFavorites}
          >
          </Favorites>
          </Route>
      </div>
    </>
  );
}

export default App;
