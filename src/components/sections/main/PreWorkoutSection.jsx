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
    <section className="flex h-full w-full lg:items-center">
      <div className=" section  w-1/2 bg-primary"></div>
      <div className=" section  w-1/2 bg-primary lg:bg-white dark:lg:bg-dark"></div>
      <picture className="pointer-events-none absolute flex w-full items-center justify-center">
        <source srcSet={preWorkoutImgLarge} media="(min-width: 1536px)" />
        <source srcSet={preWorkoutImgMedium} media="(min-width: 1024px)" />
        <source srcSet={preWorkoutImgMedium2} media="(min-width: 640px)" />
        <img
          src={preWorkoutImgSmall}
          alt="Best pre-workout VitaBoost"
          draggable="false"
          className=""
        />
      </picture>
      <div
        className={isBlackVisible ? "section-text-open" : "section-text-close"}
      >
        <span className=" text-stroke text-center font-special text-4xl text-yellow lg:text-left lg:text-6xl ">
          New Formula
        </span>
        <span className="text-center font-primary text-2xl font-semibold text-white sm:w-72 lg:w-96 lg:text-left lg:text-4xl 2xl:w-[500px]">
          Our best pre-workout, now even more invigorating!
        </span>
        <Link to="/pre-workout" className="-z-1">
          <DiscoverButton />
        </Link>
      </div>
    </section>
  );
};

export default PreWorkoutSection;
