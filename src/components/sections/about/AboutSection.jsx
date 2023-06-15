/* eslint-disable no-unused-vars */
import React from "react";
import logoIconImgMedium from "../../../img/logo/logo-icon-medium.png";
import logoIconImgLarge from "../../../img/logo/logo-icon-large.png";
import ButtonBlue from "../../buttons/ButtonBlue";

const AboutSection = () => {
  return (
    <div className="flex h-auto  flex-col items-center justify-center gap-4 p-6 pb-24 pt-24 lg:h-screen lg:flex-row lg:gap-16">
      <picture className="flex w-auto justify-center">
        <source srcSet={logoIconImgLarge} media="(min-width: 1024px)" />
        <img src={logoIconImgMedium} alt="VitaBoost" draggable="false" />
      </picture>
      <div className="flex flex-col gap-2 lg:w-[400px]">
        <h1 className=" text-[16px] uppercase text-primary">about us</h1>
        <h1 className="text-4xl font-semibold">
          We are the best Supplements brand
        </h1>
        <p className="font-[18px] text-aboutGrey">
          Unleash your true potential with VitaBoost. We redefine excellence in
          the supplement industry, with unwavering commitment to quality and
          customer satisfaction. As the go-to brand for top-tier supplements,
          join countless individuals who have already experienced the VitaBoost
          difference. Elevate your fitness journey to new heights today.
        </p>
        <ButtonBlue text="More About Us" />
      </div>
    </div>
  );
};

export default AboutSection;
