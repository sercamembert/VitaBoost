/* eslint-disable no-unused-vars */
import React from "react";
import manImgMedium from "../../../img/man/man-medium.png";
import manImgLarge from "../../../img/man/man-large.png";
import ButtonBlue from "../../buttons/ButtonBlue";
import vitaminImg from "../../../img/vitamins-icon/vitamins-icon.png";

const InvestSection = () => {
  return (
    <section className="flex h-auto flex-col lg:flex-row ">
      <div className="flex h-full w-auto flex-col items-center justify-center gap-4 bg-green p-6 py-24 lg:h-[500px] lg:w-1/2 xl:h-[600px] 2xl:h-[650px] ">
        <h1 className="text-4xl font-bold text-invest md:w-[70%] lg:text-left xl:w-[500px]">
          Invest in Your Health with VitaBoost
        </h1>
        <p className="text-2xl font-semibold text-white md:w-[70%] xl:w-[500px]">
          Discover the powerful impact of VitaBoost on your well-being. Our
          scientifically formulated supplements provide essential nutrients to
          support your body and mind. Invest in your health today.
        </p>
        <div className="flex gap-4 md:w-[70%] xl:w-[500px]">
          <ButtonBlue text="Check Offer" />
          <img src={vitaminImg} alt="Consume supplements become stronger" />
        </div>
      </div>
      <picture className="hidden w-auto lg:block lg:w-1/2">
        <source srcSet={manImgLarge} media="(min-width: 1536px)" />
        <img
          src={manImgLarge}
          alt="Become Healthy with VitaBoost supplements"
          draggable="false"
          className="h-full w-full object-cover"
        />
      </picture>
    </section>
  );
};

export default InvestSection;
