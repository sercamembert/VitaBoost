/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isBlackVisible, setIsBlackVisible] = useState(false);

  return (
    <SidebarContext.Provider value={{ isBlackVisible, setIsBlackVisible }}>
      {children}
    </SidebarContext.Provider>
  );
};
