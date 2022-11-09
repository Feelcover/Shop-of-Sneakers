function App() {
  return (
    <div className="wrapper clear">

      <div className="basketOverlay">
        <div className="basket">
          <div className="basketContainer">
          <h2 className="mb-30 d-flex justify-between">Корзина
          <button className="buttonCloseBasket">
          <img width={40} height={40} src="/img/close.png" alt="close"></img>
          </button>
          </h2>
          <div className="basketItems">
          
         
          <div className="basketItem mb-20">
            <img className="mr-20" width={70} height={65} src="/img/sneakers/1.jpg"
              alt="sneakers"></img>
              
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede Green</p>
                <b>10999 руб.</b>
              </div>
              <button className="removeButton mr-5">
                <img className="removeImg" src="/img/btn-remove.svg"></img>
              </button>
          </div>
          
          </div>
          </div>
        

          <div className="checkout">

          <ul className="total">
            <li>
              <span>Итого:</span>
              <div></div>
              <b>17598 руб.</b>
            </li>
            <li>
            <span>Налог 20%:</span>
            <div></div>
               <b>4400 руб.</b>
            </li>
          </ul>

          <button className="checkoutButton">
            Оформить заказ
            <img src="/img/arrow.svg" alt="arrow"></img>
          </button>

          </div>
        </div>
      </div>

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" />
          <div>
            <h3>SNEAKERS SHOP</h3>
            <p className="opacity-6">Магазин кроссовок</p>
          </div>
        </div>

        <ul className="d-flex align-center">
          <li className="d-flex align-center mr-30">
            <img width={18} height={18} src="/img/cart.svg" />
            <span>1205 руб.</span>
          </li>
          <li className="mr-10">
            <img width={18} height={18} src="/img/favorites.svg" />
            <span></span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" />
            <span></span>
          </li>
        </ul>
      </header>

      <div className="mainContent p-40">
        <div className="d-flex justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="searchContainer">
            <img
              className="pr-10 pl-10"
              src="/img/search.svg"
              alt="search"
            ></img>
            <input className="search" placeholder="Поиск" />
          </div>
        </div>
        <div className="cardContainer">
          <div className="card">
            <button className="buttonLike">
              <img className="like" src="/img/liked.svg" alt="like"></img>
            </button>
            <img
              width={133}
              height={133}
              src="/img/sneakers/1.jpg"
              alt="sneakers"
            ></img>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede Green</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <p className="pt-10">Цена:</p>
                <b>10999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="img"></img>
              </button>
            </div>
          </div>


         
          <div className="card">
            <button className="buttonLike">
              <img className="like" src="/img/unliked.svg" alt="like"></img>
            </button>
            <img
              width={133}
              height={133}
              src="/img/sneakers/2.jpg"
              alt="sneakers"
            ></img>
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <p className="pt-10">Цена:</p>
                <b>12999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="img"></img>
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={133}
              height={133}
              src="/img/sneakers/3.jpg"
              alt="sneakers"
            ></img>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede White</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <p className="pt-10">Цена:</p>
                <b>10999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="img"></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={133}
              src="/img/sneakers/4.jpg"
              alt="sneakers"
            ></img>
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <p className="pt-10">Цена:</p>
                <b>9999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="img"></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={133}
              src="/img/sneakers/5.jpg"
              alt="sneakers"
            ></img>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <p className="pt-10">Цена:</p>
                <b>10999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="img"></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
