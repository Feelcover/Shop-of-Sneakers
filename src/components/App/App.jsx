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
import AppContext from "../../utils/data";
import {
  getBasketItems,
  postAddBasketItems,
  postAddInFavorite,
  postDeleteBasketItems,
  postDeleteInFavorites,
  allGet,
} from "../../utils/api";

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


  // // Удаление из корзины через страницу

  // function getId(array, item) {
  //   const value = array.filter(((e) => e.name === item.name));
  //   let obj = value[0];
  //   return obj.id
  // }

  // const handleDeleteInBasketAtHome = (item) => {
  //   if (isAdded(item.name)){
  //   const id = getId(basketItems, item); 
  //   console.log(id);
  //   postDeleteBasketItems(id);
  //   setBasketItems(basketItems.filter((baItem) => baItem.name !== item.name));
  //   }
  // };

  
  // Удаление из корзины
  const handleDeleteInBasket = (item) => {
    postDeleteBasketItems(item.id);
    setBasketItems(basketItems.filter((baItem) => baItem.id !== item.id));
  };

  const handleAddInFavorites = (item) => {
    if (favorites.find((fav) => fav.name === item.name)) {
      console.log("есть в закладках");
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
        searchValue
      }}
    >
      <div className={`${styles.wrapper} clear`}>
        {basketOpen && (
          <Basket
            closeBasket={handleBasketClose}
            basketDeleteItems={handleDeleteInBasket}
          />
        )}
        <Header openModal={handleBasketOpen} />
        <Switch>
          <Route path="/" exact>
            <Home isLoading={isLoading} />
          </Route>
          <Route path="/Favorites" exact>
            <Favorites></Favorites>
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
