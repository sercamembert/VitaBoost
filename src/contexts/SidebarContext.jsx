/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useState, useContext } from "react";
import { CartContext } from "./CartContext";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isBlackVisible, setIsBlackVisible] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const { isCartVisible, setIsCartVisible } = useContext(CartContext);

  const handleToggleSidebar = () => {
    if (isCartVisible) {
      setIsCartVisible(false);
      setIsHamburgerOpen(!isHamburgerOpen);
      if (isBlackVisible) {
        setIsBlackVisible(false);
      } else {
        setIsBlackVisible(true);
      }
    } else {
      setIsSidebarVisible(!isSidebarVisible);
      setIsHamburgerOpen(!isHamburgerOpen);
      if (isBlackVisible) {
        setIsBlackVisible(false);
      } else {
        setIsBlackVisible(true);
      }
    }
  };
  const handleToggleCart = () => {
    setIsCartVisible(!isCartVisible);
    setIsHamburgerOpen(!isHamburgerOpen);
    if (isSidebarVisible) {
      setIsSidebarVisible(false);
      setIsBlackVisible(false);
    } else {
      setIsBlackVisible(!isBlackVisible);
    }
  };

  return (
    <SidebarContext.Provider
      value={{
        isBlackVisible,
        setIsBlackVisible,
        handleToggleSidebar,
        handleToggleCart,
        isSidebarVisible,
        setIsSidebarVisible,
        isHamburgerOpen,
        setIsHamburgerOpen,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
