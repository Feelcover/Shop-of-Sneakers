import Card from "../components/Card/Card";
import imgSearch from "../img/search.svg";
import imgClose from "../img/close.png";
import imgBanner from "../img/banner.jpg";
import styles from "../components/App/App.module.scss";

const Home = ({
  items = [],
  searchValue,
  handleChangeSearchInput,
  handleChangeSearchInputClear,
  searchFilter,
  handleAddInBasket,
  handleAddInFavorites,
  handleDeleteInFavorites,
  handleDeleteInBasket,
  basketItems = [],
  favorites = [],
  isLoading,
}) => {

  const renderItems = () => {
    const filterItems = searchFilter(items);
    // if (isLoading) {
    //   return [...Array(4)].map((e, index) => (
    //     <Card
    //       key={index}
    //       isLoading={isLoading}
    //     ></Card>
    //   ));
    // } else {
    //   return filterItems.map((e) => (
    //     <Card
    //       favList={favorites}
    //       basketItems={basketItems}
    //       {...e}
    //       key={e.id}
    //       onAddInBasket={() => handleAddInBasket(e)}
    //       onDeleteInBasket={() => handleDeleteInBasket(e)}
    //       onAddInFavorites={() => handleAddInFavorites(e)}
    //       onDeleteInFavorites={() => handleDeleteInFavorites(e)}
    //       isLoading={isLoading}
    //     ></Card>
    //   ));
    // }

    return (isLoading ? [...Array(4)] : filterItems).map((e, index) => (
        <Card
          favList={favorites}
          basketItems={basketItems}
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
