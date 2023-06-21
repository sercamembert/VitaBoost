/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
import { useEffect, useState } from "react";
import emptyBagImg from "../../img/cart/empty-cart.jpg";
import { Link } from "react-router-dom";

const Cart = ({ isVisible, handleClose }) => {
  const { cartItems, handleRemoveFromCart } = useContext(CartContext);

  let totalPrice = 0;
  cartItems.map((item, index) => {
    totalPrice += parseFloat(item.price) * item.qty;
  });

  return (
    <section className={isVisible ? "cart" : "cart-close"}>
      <div className="flex h-full w-full flex-col">
        <div className="mt-6 flex-1 px-4 py-6 sm:px-6">
          <div className="mt-12">
            <div className="flow-root">
              {cartItems.length > 0 ? (
                <CartItems
                  cartItems={cartItems}
                  handleRemoveFromCart={handleRemoveFromCart}
                  handleClose={handleClose}
                />
              ) : (
                <CartEmpty handleClose={handleClose} />
              )}
            </div>
          </div>
        </div>

        <TotalPrice totalPrice={totalPrice} handleClose={handleClose} />
      </div>
    </section>
  );
};

const CartItems = ({ cartItems, handleRemoveFromCart, handleClose }) => {
  return (
    <ul role="list" className="-my-6 divide-y divide-gray-200">
      {cartItems.map((item, index) => (
        <li className="flex py-6" key={index}>
          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
            <img
              src={item.img}
              alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="ml-4 flex flex-1 flex-col">
            <div>
              <div className="flex justify-between text-base font-medium text-gray-900 dark:text-white">
                <h3>
                  <Link to={item.link} onClick={handleClose}>
                    {item.name}
                  </Link>
                </h3>
                <p className="ml-4">
                  {(parseFloat(item.price) * item.qty).toFixed(2)}$
                </p>
              </div>
              <p className="mt-1 text-sm text-gray-500">{item.flavour}</p>
            </div>
            <div className="flex flex-1 items-end justify-between text-sm">
              <p className="text-gray-500">Qty {item.qty}</p>

              <div className="flex">
                <button
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  onClick={() => {
                    handleRemoveFromCart(item);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export const CartEmpty = ({ handleClose }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <img src={emptyBagImg} alt="Your cart is empty" />
      <p className="text-center text-2xl font-medium">Your cart is empty</p>
      <Link
        to="/#products"
        className=" text-indigo-500 hover:text-indigo-700 "
        onClick={handleClose}
      >
        Discover products
        <span aria-hidden="true"> &rarr;</span>
      </Link>
    </div>
  );
};

const TotalPrice = ({ totalPrice, handleClose }) => {
  return (
    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
      <div className="flex justify-between text-base font-medium text-gray-900 dark:text-white">
        <p>Subtotal</p>
        <p>{totalPrice.toFixed(2)}$</p>
      </div>
      <p className="mt-0.5 text-sm text-gray-500">
        Shipping and taxes calculated at checkout.
      </p>
      <div className="mt-6">
        <Link
          to="/cart"
          className="flex items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white shadow-sm duration-200 ease-in-out hover:animate-pulse hover:bg-indigo-700"
          onClick={handleClose}
        >
          Checkout
        </Link>
      </div>
      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
        <p>
          or{" "}
          <button
            onClick={handleClose}
            type="button"
            className=" text-indigo-500 hover:text-indigo-700"
          >
            Continue Shopping
            <span aria-hidden="true"> &rarr;</span>
          </button>
        </p>
      </div>
    </div>
  );
};

export default Cart;
