/* eslint-disable no-unused-vars */
import preWorkoutImgSmall from "../../../img/products/pre-workout/pre-workout-small.png";
import preWorkoutImgMedium from "../../../img/products/pre-workout/pre-workout-medium.png";
import preWorkoutImgMedium2 from "../../../img/products/pre-workout/pre-workout-medium2.png";
import preWorkoutImgLarge from "../../../img/products/pre-workout/pre-workout-large.png";
import DiscoverButton from "../../buttons/DiscoverButton";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SidebarContext } from "../../../contexts/SidebarContext";

const PreWorkoutSection = () => {
  const { isBlackVisible } = useContext(SidebarContext);
  return (
    <div className="flex h-full lg:items-center w-full">
      <div className=" w-1/2 section bg-primary -z-20"></div>
      <div className=" w-1/2 section bg-primary lg:bg-white -z-20"></div>
      <picture className="absolute w-full flex justify-center pointer-events-none items-center">
        <source srcSet={preWorkoutImgLarge} media="(min-width: 1536px)" />
        <source srcSet={preWorkoutImgMedium} media="(min-width: 1024px)" />
        <source srcSet={preWorkoutImgMedium2} media="(min-width: 640px)" />
        <img
          src={preWorkoutImgSmall}
          alt="Best pre-workout VitaBoost"
          draggable="false"
          className="-z-10"
        />
      </picture>
      <div
        className={isBlackVisible ? "section-text-open" : "section-text-close"}
      >
        <span className=" font-special text-stroke text-4xl text-yellow lg:text-6xl text-center lg:text-left ">
          New Formula
        </span>
        <span className="font-primary font-semibold text-white text-2xl lg:text-4xl text-center lg:text-left lg:w-96 2xl:w-[500px] sm:w-72">
          Our best pre-workout, now even more invigorating!
        </span>
        <Link to="/pre-workout" className="-z-1">
          <DiscoverButton />
        </Link>
      </div>
    </div>
  );
};

export default PreWorkoutSection;
