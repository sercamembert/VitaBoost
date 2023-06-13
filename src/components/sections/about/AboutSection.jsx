/* eslint-disable no-unused-vars */
import React from "react";
import logoIconImgMedium from "../../../img/logo/logo-icon-medium.png";
import logoIconImgLarge from "../../../img/logo/logo-icon-large.png";
import AboutButton from "../../buttons/AboutButton";

const AboutSection = () => {
  return (
    <div className="h-auto  flex flex-col lg:flex-row items-center p-6 gap-4 justify-center lg:gap-16">
      <picture className="w-auto flex justify-center">
        <source srcSet={logoIconImgLarge} media="(min-width: 1024px)" />
        <img src={logoIconImgMedium} alt="VitaBoost" draggable="false" />
      </picture>
      <div className="flex flex-col gap-2 lg:w-[400px]">
        <h1 className=" uppercase text-[16px] text-primary">about us</h1>
        <h1 className="text-4xl font-semibold">
          We are the best Supplements brand
        </h1>
        <p className="text-aboutGrey font-[18px]">
          Unleash your true potential with VitaBoost. We redefine excellence in
          the supplement industry, with unwavering commitment to quality and
          customer satisfaction. As the go-to brand for top-tier supplements,
          join countless individuals who have already experienced the VitaBoost
          difference. Elevate your fitness journey to new heights today.
        </p>
        <AboutButton />
      </div>
    </div>
  );
};

export default AboutSection;
