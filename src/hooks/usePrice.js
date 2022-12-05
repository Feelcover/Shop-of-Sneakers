import { useContext } from "react";
import AppContext from "../utils/data";

export const usePrice = () => {
    const {basketItems, setBasketItems} = useContext(AppContext);
  const CartPrice = basketItems.reduce((sum, obj) => obj.price + sum, 0);


  return {basketItems, setBasketItems, CartPrice}

}