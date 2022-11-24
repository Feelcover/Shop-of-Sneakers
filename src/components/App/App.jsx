import React from "react";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Basket from "../Basket/Basket";
import Header from "../Header/Header";
import Home from "../../pages/Home";
import Favorites from "../../pages/Favorites";
import Error from "../../pages/Error";
// import { data } from "../../utils/data";
import styles from "./App.module.scss";

import {
  getBasketItems,
  getItems,
  postAddBasketItems,
  postAddInFavorite,
  postDeleteBasketItems,
  postDeleteInFavorites,
  getFavorites
} from "../../utils/api";

function App() {
  const [items, setItems] = useState([]);
  const [basketItems, setBasketItems] = useState([]);
  const [basketOpen, setBasketOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getItems(setItems);
    getBasketItems(setBasketItems);
    getFavorites(setFavorites);
  }, []);
  console.log(items);
  console.log(basketItems);
  console.log(favorites);


  const handleBasketOpen = () => {
    getBasketItems(setBasketItems);
    setBasketOpened(true);
  };
  const handleBasketClose = () => {
    setBasketOpened(false);
  };
  const handleAddInBasket = (item) => {
    if(basketItems.find((baItem) => baItem.name === item.name)){
      console.log('Уже есть в корзине')
    }else{
      postAddBasketItems(item);
      setBasketItems((prev) => [...prev, item]);
    }

  };
  const handleDeleteInBasket = (id) => {
    postDeleteBasketItems(id);
    setBasketItems(basketItems.filter((item) => item.id !== id));
  };

  const handleAddInFavorites = (item) => {
    if (favorites.find((fav) => fav.name === item.name)) {
      console.log("Уже есть");
    } else {
      postAddInFavorite(item);
      setFavorites((prev) => [...prev, item]);
    }
  };

  const handleDeleteInFavorites = (item) => {
    postDeleteInFavorites(item.id);
    setFavorites(favorites.filter((fav) => fav.name !== item.id));
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
        <Header openModal={handleBasketOpen} setFavorites={setFavorites} />
        <Switch>
          <Route path="/" exact>
            <Home
              items={items}
              searchValue={searchValue}
              handleChangeSearchInput={handleChangeSearchInput}
              handleChangeSearchInputClear={handleChangeSearchInputClear}
              searchFilter={searchFilter}
              handleAddInBasket={handleAddInBasket}
              favorites={favorites}
              handleAddInFavorites={handleAddInFavorites}
              handleDeleteInFavorites={handleDeleteInFavorites}
            />
          </Route>
          <Route path="/Favorites">
            <Favorites
              items={items}
              searchValue={searchValue}
              handleChangeSearchInput={handleChangeSearchInput}
              handleChangeSearchInputClear={handleChangeSearchInputClear}
              searchFilter={searchFilter}
              handleAddInBasket={handleAddInBasket}
              handleAddInFavorites={handleAddInFavorites}
              favorites={favorites}
              handleDeleteInFavorites={handleDeleteInFavorites}
              setFavorites={setFavorites}
            ></Favorites>
          </Route>
          <Route>
            <Error/>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
