import Card from "../components/Card/Card";
import imgSearch from "../img/search.svg";
import imgClose from "../img/close.png";
import imgBanner from "../img/banner.jpg";
import styles from "../components/App/App.module.scss";
import { useEffect } from "react";
import { getFavorites } from "../utils/api";

const Favorites = ({
  searchValue,
  handleChangeSearchInput,
  handleChangeSearchInputClear,
  searchFilter,
  handleAddInBasket,
  favorites,
  setFavorites,
  handleAddInFavorites,
  handleDeleteInFavorites,
}) => {

  useEffect(() => {
    getFavorites(setFavorites)
  }, [])

  return (
    <div className={styles.mainContent}>
      <img className={styles.banner} src={imgBanner} alt="banner" />
      <div className={styles.mainContainer}>
        <h1>
          {searchValue ? `Поиск по запросу: ${searchValue}` : "Закладки"}
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
      {searchFilter(favorites).map((e, index) => (
          <Card
            key={index}
            image={e.image}
            name={e.name}
            price={e.price}
            onAddInBasket={() => handleAddInBasket(e)}
            favList={favorites}
            onAddInFavorites={() => handleAddInFavorites(e)}
            onDeleteInFavorites={() => handleDeleteInFavorites(e)}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
