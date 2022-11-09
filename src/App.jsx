import React from "react";
import Basket from "./components/Basket";
import Card from "./components/Card";
import Header from "./components/Header";
function App() {
  return (
    <>
    <div className="wrapper clear">
      <Basket/>
      <Header />
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
          <Card
            image={"/img/sneakers/1.jpg"}
            name={"Мужские Кроссовки Nike Blazer Mid Suede Green"}
            price={10990}
          />
          <Card
            image={"/img/sneakers/2.jpg"}
            name={"Мужские Кроссовки Nike Air Max 270"}
            price={12990}
          />
          <Card
            image={"/img/sneakers/3.jpg"}
            name={"Мужские Кроссовки Nike Blazer Mid Suede White"}
            price={10990}
          />
          <Card
            image={"/img/sneakers/4.jpg"}
            name={"Кроссовки Puma X Aka Boku Future Rider"}
            price={9990}
          />
           <Card
            image={"/img/sneakers/1.jpg"}
            name={"Мужские Кроссовки Nike Blazer Mid Suede Green"}
            price={10990}
          />
          <Card
            image={"/img/sneakers/2.jpg"}
            name={"Мужские Кроссовки Nike Air Max 270"}
            price={12990}
          />
          <Card
            image={"/img/sneakers/3.jpg"}
            name={"Мужские Кроссовки Nike Blazer Mid Suede White"}
            price={10990}
          />
          <Card
            image={"/img/sneakers/4.jpg"}
            name={"Кроссовки Puma X Aka Boku Future Rider"}
            price={9990}
          /> <Card
          image={"/img/sneakers/1.jpg"}
          name={"Мужские Кроссовки Nike Blazer Mid Suede Green"}
          price={10990}
        />
        <Card
          image={"/img/sneakers/2.jpg"}
          name={"Мужские Кроссовки Nike Air Max 270"}
          price={12990}
        />
        <Card
          image={"/img/sneakers/3.jpg"}
          name={"Мужские Кроссовки Nike Blazer Mid Suede White"}
          price={10990}
        />
        <Card
          image={"/img/sneakers/4.jpg"}
          name={"Кроссовки Puma X Aka Boku Future Rider"}
          price={9990}
        /> <Card
            image={"/img/sneakers/1.jpg"}
            name={"Мужские Кроссовки Nike Blazer Mid Suede Green"}
            price={10990}
          />
          <Card
            image={"/img/sneakers/2.jpg"}
            name={"Мужские Кроссовки Nike Air Max 270"}
            price={12990}
          />
          <Card
            image={"/img/sneakers/3.jpg"}
            name={"Мужские Кроссовки Nike Blazer Mid Suede White"}
            price={10990}
          />
          <Card
            image={"/img/sneakers/4.jpg"}
            name={"Кроссовки Puma X Aka Boku Future Rider"}
            price={9990}
          />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
