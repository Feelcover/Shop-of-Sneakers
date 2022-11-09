import React from "react";

const Header = () => {
  return (
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
  );
};

export default Header;
