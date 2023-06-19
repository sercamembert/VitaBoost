/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const updateCartItems = (updatedItems) => {
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(
      (item) => item.name === product.name && item.flavour === product.flavour
    );
    if (existingItem) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.name === product.name && item.flavour === product.flavour) {
          return { ...item, qty: item.qty + 1 };
        }
        return item;
      });
      updateCartItems(updatedCartItems);
    } else {
      const updatedCartItems = [...cartItems, { ...product, qty: 1 }];
      updateCartItems(updatedCartItems);
    }
  };

  const handleRemoveFromCart = (product) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.name !== product.name || item.flavour !== product.flavour
    );
    updateCartItems(updatedCartItems);
  };

  return (
    <CartContext.Provider
      value={{
        isCartVisible,
        setIsCartVisible,
        cartItems,
        setCartItems: updateCartItems,
        handleAddToCart,
        handleRemoveFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
