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
  postAddBasketItems,
  postAddInFavorite,
  postDeleteBasketItems,
  postDeleteInFavorites,
  allGet
} from "../../utils/api";

function App() {
  const [items, setItems] = useState([]);
  const [basketItems, setBasketItems] = useState([]);
  const [basketOpen, setBasketOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getData() {
      await allGet(setBasketItems, setFavorites, setItems); 
      setIsLoading(false)
    }
    getData()
  }, []);


 

  const handleBasketOpen = () => {
    getBasketItems(setBasketItems);
    setBasketOpened(true);
  };
  const handleBasketClose = () => {
    setBasketOpened(false);
  };
  const handleAddInBasket = (item) => {
    if (basketItems.find((baItem) => baItem.name === item.name)) {
      console.log('есть в корзине');
    } else {
      postAddBasketItems(item);
      setBasketItems((prev) => [...prev, item]);
    }
  };

  const handleDeleteInBasket = (item) => {
    postDeleteBasketItems(item.id);
    setBasketItems(basketItems.filter((baItem) => baItem.id !== item.id));
  };


 


  const handleAddInFavorites = (item) => {
    if (favorites.find((fav) => fav.name === item.name)) {
      console.log('есть в закладках');
    } else {
      postAddInFavorite(item);
      setFavorites((prev) => [...prev, item]);
    }
  };

  const handleDeleteInFavorites = (item) => {
    postDeleteInFavorites(item.id);
    setFavorites(favorites.filter((fav) => fav.id !== item.id));
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
              basketItems={basketItems}
              items={items}
              searchValue={searchValue}
              handleChangeSearchInput={handleChangeSearchInput}
              handleChangeSearchInputClear={handleChangeSearchInputClear}
              searchFilter={searchFilter}
              handleAddInBasket={handleAddInBasket}
              handleDeleteInBasket={handleDeleteInBasket}
              handleAddInFavorites={handleAddInFavorites}
              handleDeleteInFavorites={handleDeleteInFavorites}
              favorites={favorites}
              setFavorites={setFavorites}
              isLoading={isLoading}
            />
          </Route>
          <Route path="/Favorites" exact>
            <Favorites
              setFavorites={setFavorites}
              basketItems={basketItems}
              items={items}
              searchValue={searchValue}
              handleChangeSearchInput={handleChangeSearchInput}
              handleChangeSearchInputClear={handleChangeSearchInputClear}
              searchFilter={searchFilter}
              handleAddInBasket={handleAddInBasket}
              handleAddInFavorites={handleAddInFavorites}
              handleDeleteInBasket={handleDeleteInBasket}
              favorites={favorites}
              handleDeleteInFavorites={handleDeleteInFavorites}
            ></Favorites>
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
