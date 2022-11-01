function App() {
  return (
    <div className="wrapper clear" >
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" />
          <div>
            <h3>SNEAKERS SHOP</h3>
            <p className="opacity-6">Магазин кроссовок</p>
          </div>
        </div>

          <ul className="d-flex">
            <li className="mr-30">
              <img width={18} height={18} src="/img/cart.svg" />
              <span>1205 руб.</span>
            </li>
            <li>
              <img width={18} height={18} src="/img/user.svg" />
              <span></span>
            </li>
          </ul>
      </header>


      <div className="mainContent p-40">
      <h1>Все кроссовки</h1>
      <div className="d-flex flex-wrap">
      <div className="card">
        <img width={133} height={133} src="/img/sneakers/1.jpg" alt="sneakers"></img>
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
        <img width={133} height={133} src="/img/sneakers/2.jpg" alt="sneakers"></img>
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
        <img width={133} height={133} src="/img/sneakers/3.jpg" alt="sneakers"></img>
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
        <img width={133} height={133} src="/img/sneakers/4.jpg" alt="sneakers"></img>
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
        <img width={133} height={133} src="/img/sneakers/5.jpg" alt="sneakers"></img>
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
