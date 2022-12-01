import React from "react";
import Card from "../components/Card/Card";
import imgSearch from "../img/search.svg";
import imgClose from "../img/close.png";
import imgBanner from "../img/banner.jpg";
import styles from "../components/App/App.module.scss";
import AppContext from "../utils/data";

const Home = ({ isLoading }) => {
  const {
    items,
    handleChangeSearchInput,
    handleChangeSearchInputClear,
    searchValue,
    searchFilter,
    handleAddInBasket,
    handleAddInFavorites,
    handleDeleteInFavorites,
    handleDeleteInBasket
  } = React.useContext(AppContext);

  const renderItems = () => {
    const filterItems = searchFilter(items);

    return (isLoading ? [...Array(8)] : filterItems).map((e, index) => (
      <Card
        {...e}
        key={index}
        onAddInBasket={() => handleAddInBasket(e)}
        onDeleteInBasket={() => handleDeleteInBasket(e)}
        onAddInFavorites={() => handleAddInFavorites(e)}
        onDeleteInFavorites={() => handleDeleteInFavorites(e)}
        isLoading={isLoading}
      ></Card>
    ));
  };

  return (
    <div className={styles.mainContent}>
      <img className={styles.banner} src={imgBanner} alt="banner" />
      <div className={styles.mainContainer}>
        <h1>
          {searchValue ? `Поиск по запросу: ${searchValue}` : "Все кроссовки"}
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

      <div className={styles.cardContainer}>{renderItems()}</div>
    </div>
  );
};

export default Home;
