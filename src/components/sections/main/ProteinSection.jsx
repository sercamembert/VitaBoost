import proteinImgSmall from "../../../img/products/protein/protein-small.png";
import proteinImgMedium2 from "../../../img/products/protein/protein-medium2.png";
import DiscoverButton from "../../buttons/DiscoverButton";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SidebarContext } from "../../../contexts/SidebarContext";

const ProteinSection = () => {
  const { isBlackVisible } = useContext(SidebarContext);
  return (
    <section className="flex h-[690px] lg:items-center w-full flex-col xl:flex-row lg:h-[600px] xl:h-[650px]">
      <div className="w-full xl:w-1/2 lg:h-full">
        <img
          src="https://i.shgcdn.com/c5551027-e3a2-4ab5-bde3-1588188e2680/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="w-full xl:w-1/2 h-auto bg-wheyBg lg:h-full flex justify-center items-center">
        <div
          className={
            isBlackVisible
              ? "flex flex-col gap-2 items-center lg:items-start z-10 justify-center lg:w-full pb-6"
              : "flex flex-col gap-2 items-center lg:items-start justify-center lg:w-full pb-6"
          }
        >
          <picture className="w-full flex justify-center pointer-events-none items-center">
            <source srcSet={proteinImgMedium2} media="(min-width: 1024px)" />
            <img
              src={proteinImgSmall}
              alt="Best protein VitaBoost"
              draggable="false"
            />
          </picture>
          <div className="flex flex-col w-full justify-center items-center gap-2">
            <span className="font-special text-stroke text-4xl text-red text-center lg:text-left">
              Pure Whey
            </span>
            <span className="font-primary font-semibold text-white text-2xl lg:text-lg text-center  sm:w-96 xl:w-96">
              Our pure whey - Now with enhanced potency, providing optimal
              muscle recovery and growth!
            </span>
            <Link to="/protein" className="-z-1">
              <DiscoverButton />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProteinSection;
