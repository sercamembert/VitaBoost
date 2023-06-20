/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import preWorkoutImg from "../../img/products/pre-workout/pre-workout-small.png";
import proteinImg from "../../img/products/protein/protein-small.png";
import creatineImg from "../../img/products/creatine/creatine-large.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const ProductsSection = () => {
  return (
    <section
      className="flex h-auto w-full flex-col items-center justify-center gap-x-20 gap-y-14 p-6 pb-6 pt-28 xl:flex-row xl:pb-28"
      id="products"
    >
      <Product
        name="Pre-Workout"
        price="19.99$"
        description="Explosive Energy Boost"
        link="/pre-workout"
        img={preWorkoutImg}
        flavour="Raspberry"
      />
      <Product
        name="Pure Whey"
        price="24.99$"
        description="Muscle Recovery Fuel"
        link="/protein"
        img={proteinImg}
        flavour="Strawberry"
      />
      <Product
        name="Creatine"
        price="29.99$"
        description="Fuel Your Strength Gains"
        link="/creatine"
        img={creatineImg}
        flavour="Unflavoured"
      />
    </section>
  );
};

const Product = ({ name, price, description, img, link, flavour }) => {
  const { handleAddToCart } = useContext(CartContext);
  return (
    <div className="flex h-auto w-[300px] flex-col items-center justify-center gap-2 rounded-lg p-3 pb-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <img src={img} alt={name} />
      <h1 className="text-center text-2xl font-semibold text-primary">
        {name}
      </h1>
      <p className="text-center text-xl font-medium">{description}</p>
      <p className="text-center text-xl font-bold ">{price}</p>
      <div className="mt-2 flex gap-4">
        <div
          className=" flex h-[45px] w-[56px] items-center justify-center rounded-lg bg-primary text-white hover:animate-pulse hover:cursor-pointer"
          onClick={() => {
            handleAddToCart({
              name: name,
              price: price,
              flavour: flavour,
              qty: 1,
              img: img,
              link: link,
            });
          }}
        >
          <ShoppingCartIcon color="white" />
        </div>
        <Link to={link}>
          <button className="h-[46px] w-[138px] rounded-lg border-2 border-primary bg-white font-semibold duration-200 ease-in-out hover:animate-pulse hover:bg-primary hover:text-white dark:bg-dark dark:hover:bg-primary dark:hover:text-white">
            Product Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductsSection;
