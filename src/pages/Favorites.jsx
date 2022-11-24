import Card from "../components/Card/Card";
import imgSearch from "../img/search.svg";
import imgClose from "../img/close.png";
import imgBanner from "../img/banner.jpg";
import imgArrow from "../img/arrow.svg";
import styles from "../components/App/App.module.scss";
import { Link } from "react-router-dom";
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
    getFavorites(setFavorites);
  }, []);


  return (
    <div className={styles.mainContent}>
      <img className={styles.banner} src={imgBanner} alt="banner" />
      <div className={styles.mainContainer}>
        <h1>{searchValue ? `Поиск по запросу: ${searchValue}` : "Избранное"}</h1>
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

      {favorites.length === 0 && (
       <Link to="/">

          <div className={styles.containerEmpty}>
            <h1>Вы ничего не добавили в избранное</h1>
            <h3>Хотите что-нибудь добавить?</h3>
            <button className={styles.backToShopButton}
            
            >
              Вернуться в магазин
              <img src={imgArrow} alt="arrow"></img>
            </button>
          </div>
          </Link>
        )}
        {searchFilter(favorites).map((e) => (
          <Card
            {...e}
            key={e.id}
            onAddInBasket={() => handleAddInBasket(e)}
            favList={favorites}
            onAddInFavorites={() => handleAddInFavorites(e)}
            onDeleteInFavorites={() => handleDeleteInFavorites(e)}
            addedInFavorite={true}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Favorites;