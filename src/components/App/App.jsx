import React from "react";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Basket from "../Basket/Basket";
import Header from "../Header/Header";
import Home from "../../pages/Home/Home";
import Favorites from "../../pages/Favorites/Favorites";
import Error from "../../pages/Error/Error";
// import { data } from "../../utils/data";
import styles from "./App.module.scss";
import AppContext from "../../utils/data";
import {
  getBasketItems,
  postAddBasketItems,
  postAddInFavorite,
  postDeleteBasketItems,
  postDeleteInFavorites,
  allGet,
  getFavorites,
  getItems,
} from "../../utils/api";
import Profile from "../../pages/Profile/Profile";

function App() {
  const [items, setItems] = useState([]);
  const [basketItems, setBasketItems] = useState([]);
  const [basketOpen, setBasketOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      await allGet(setBasketItems, setFavorites, setItems);
      setIsLoading(false);
    }
    getData();
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
      console.log("есть в корзине");
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
    if (favorites.some((fav) => fav.name === item.name)) {
      console.log("есть в закладках");
    } else {
      postAddInFavorite(item);
      setFavorites((prev) => [...prev, item]);
    }
  };


  const getId = (array, item) => {
    const value = array.filter((e) => e.name === item.name);
    let obj = value[0];
    return obj.id;
  }
  const handleDeleteInFavorites = (item) => {
    if (isFavorite(item.name)) {
      const id = getId(favorites, item);
      console.log(id);
      postDeleteInFavorites(item.id);
      setFavorites(favorites.filter((favItem) => favItem.name !== item.name));
    }
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

  const isAdded = (name) => {
    return basketItems.find((baItem) => baItem.name === name);
  };

  const isFavorite = (name) => {
    return favorites.find((favItem) => favItem.name === name);
  };

  return (
    <AppContext.Provider
      value={{
        items,
        basketItems,
        favorites,
        searchValue,
        isAdded,
        isFavorite,
        handleChangeSearchInput,
        handleChangeSearchInputClear,
        searchFilter,
        handleAddInBasket,
        handleDeleteInBasket,
        handleAddInFavorites,
        handleDeleteInFavorites,
        setFavorites,
        getFavorites,
        getItems,
        setBasketItems,
      }}
    >
      <div className={`${styles.wrapper} clear`}>
        {basketOpen && <Basket closeBasket={handleBasketClose} />}
        <Header openModal={handleBasketOpen} />
        <Switch>
          <Route path="/" exact>
            <Home isLoading={isLoading} />
          </Route>
          <Route path="/Favorites" exact>
            <Favorites />
          </Route>
          <Route path="/Profile" exact>
            <Profile isLoading={isLoading} />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
      </div>
    </AppContext.Provider>
  );
}

export default App;
