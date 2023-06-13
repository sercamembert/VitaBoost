import proteinImgSmall from "../../../img/products/protein/protein-small.png";
import proteinImgMedium from "../../../img/products/protein/protein-medium.png";
import proteinImgMedium2 from "../../../img/products/protein/protein-medium2.png";
import proteinImgLarge from "../../../img/products/protein/protein-large.png";
import DiscoverButton from "../../buttons/DiscoverButton";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SidebarContext } from "../../../contexts/SidebarContext";

const ProteinSection = () => {
  const { isBlackVisible } = useContext(SidebarContext);
  return (
    <div className="flex h-[530px] sm:h-[700px] lg:h-full lg:items-center w-full flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 section bg-wheyBg lg:bg-white"></div>
      <div className="w-full lg:w-1/2 section bg-wheyBg ">
        <div
          className={
            isBlackVisible
              ? "flex flex-col gap-2 p-6 items-center lg:items-start lg:pl-[150px] lg:pt-48 2xl:pl-[250px] z-10"
              : "flex flex-col gap-2 p-6 items-center lg:items-start lg:pl-[150px] lg:pt-48 2xl:pl-[250px]"
          }
        >
          <span className="font-special text-stroke text-4xl text-red lg:text-6xl text-center lg:text-left">
            Pure Whey
          </span>
          <span className="font-primary font-semibold text-white text-2xl lg:text-2xl text-center lg:text-left sm:w-96 lg:w-auto 2xl:w-96">
            Our pure whey - Now with enhanced potency, providing optimal muscle
            recovery and growth!
          </span>
          <Link to="/protein" className="-z-1">
            <DiscoverButton />
          </Link>
        </div>
      </div>
      <picture className="absolute w-full flex justify-center pointer-events-none items-center">
        <source srcSet={proteinImgLarge} media="(min-width: 1536px)" />
        <source srcSet={proteinImgMedium} media="(min-width: 1024px)" />
        <source srcSet={proteinImgMedium2} media="(min-width: 640px)" />
        <img
          src={proteinImgSmall}
          alt="Best protein VitaBoost"
          draggable="false"
        />
      </picture>
    </div>
  );
};

export default ProteinSection;
