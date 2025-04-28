import React from "react";
import all_product from "../Components/Assests/all_product";
import { createContext } from "react";
import { useState } from "react";

export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i <= all_product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };
  const removeCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += cartItems[item] * itemInfo.new_price;
      }
    }
    return totalAmount;
  };
  const getTotalCartItems=()=>{
    let totalItem=0
    for(const item in cartItems)
    {
      if(cartItems[item]>0)
      {
        totalItem +=cartItems[item];
      }
    }
     return totalItem
  }
  const contextVlaue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    removeCart,
    addToCart,
  };

  return (
    <ShopContext.Provider value={contextVlaue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
