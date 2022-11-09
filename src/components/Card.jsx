import React from "react";

const Card = ({image, name, price}) => {
  return (
    <div className="card">
      <button className="buttonLike">
        <img className="like" src="/img/liked.svg" alt="like"></img>
      </button>
      <img
        width={133}
        height={133}
        src={image}
        alt="sneakers"
      ></img>
      <h5>{name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <p className="pt-10">Цена:</p>
          <b>{price} руб.</b>
        </div>
        <button className="buttonAdd">
          <img width={11} height={11} src="/img/plus.svg" alt="img"></img>
        </button>
      </div>
    </div>
  );
};

export default Card;
