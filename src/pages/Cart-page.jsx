/* eslint-disable no-unused-vars */
import React from "react";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import emptyBagImg from "../img/cart/empty-cart.jpg";
import { CartEmpty } from "../components/cart/Cart";
import creatineImg from "../img/products/creatine/creatine-large.png";
import ButtonBlue from "../components/buttons/ButtonBlue";
import CloseIcon from "@mui/icons-material/Close";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const CartPage = () => {
  const { cartItems, handleRemoveFromCart, handleUpdateCartItemQty } =
    useContext(CartContext);

  let totalPrice = 0;
  let shippingPrice = 5;

  cartItems.map((item, index) => {
    totalPrice += parseFloat(item.price) * parseFloat(item.qty);
  });

  return (
    <section className="my-[100px] flex h-auto w-full justify-center">
      <div className="w-[95%] rounded-md border border-gray-300 p-6 lg:w-[75%] 2xl:w-[70%]">
        <h1 className=" mb-6 w-full text-left text-3xl font-bold md:text-4xl">
          Shopping Cart
        </h1>
        <div className="flex w-full flex-col gap-x-6 lg:flex-row">
          {!cartItems.length > 0 ? (
            <div className="flex w-full items-center justify-center">
              <CartEmpty />
            </div>
          ) : (
            <div className="flex w-full flex-col lg:w-[60%]">
              {cartItems.map((item, index) => (
                <div
                  className="flex w-full border-t border-gray-300 py-6 "
                  key={index}
                >
                  <img
                    src={item.img}
                    alt=""
                    className=" h-32 w-32 sm:h-40 sm:w-40 xl:h-48 xl:w-48 2xl:h-60 2xl:w-60"
                  />
                  <div className=" flex w-full flex-col gap-1 xl:translate-y-6">
                    <div className="flex w-full items-center justify-between">
                      <p className=" text-md font-bold md:text-2xl">
                        {item.name}
                      </p>
                      <div
                        className="mr-2 cursor-pointer rounded-md bg-gray-200 p-1 text-gray-600 duration-200 ease-in-out hover:bg-gray-400"
                        onClick={() => {
                          handleRemoveFromCart(item);
                        }}
                      >
                        <CloseIcon />
                      </div>
                    </div>
                    <p className="text-sm md:text-lg">{item.flavour}</p>
                    <p className="text-sm md:text-lg">
                      {(parseFloat(item.price) * item.qty).toFixed(2)}$
                    </p>
                    <Select
                      value={item.qty}
                      onChange={(event) => {
                        const newQty = event.target.value;
                        handleUpdateCartItemQty(item, newQty);
                      }}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      className=" h-8 w-14 dark:bg-white "
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                    </Select>
                  </div>
                </div>
              ))}
            </div>
          )}
          {cartItems.length > 0 && (
            <div className="flex w-full flex-col gap-4 p-2 lg:w-[40%]">
              <h1 className="w-full text-left text-xl font-semibold">
                Order summary
              </h1>
              <div className="flex w-full justify-between border-b border-gray-300 py-2 text-gray-400">
                <p>Subtotal</p>
                <p>{parseFloat(totalPrice).toFixed(2)}$</p>
              </div>
              <div className="flex w-full justify-between border-b border-gray-300 py-2 text-gray-400">
                <p>Shipping</p>
                <p>{shippingPrice}$</p>
              </div>
              <div className="flex w-full justify-between border-b border-gray-300 py-2 text-gray-400">
                <p>Tax estimate</p>
                <p>{(totalPrice * 0.11).toFixed(2)}$</p>
              </div>
              <div className="flex w-full justify-between font-bold">
                <p>Order total</p>
                <p>
                  {parseFloat(
                    totalPrice + shippingPrice + totalPrice * 0.11
                  ).toFixed(2)}
                  $
                </p>
              </div>
              <button className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-primary bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out hover:bg-gray-800 focus:shadow dark:hover:animate-pulse dark:hover:bg-primary">
                Order Now
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default CartPage;
