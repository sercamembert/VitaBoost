import creatineImgSmall from "../../../img/products/creatine/creatine-small.png";
import creatineImgMedium2 from "../../../img/products/creatine/creatine-medium2.png";
import DiscoverButton from "../../buttons/DiscoverButton";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SidebarContext } from "../../../contexts/SidebarContext";

const creatineSection = () => {
  const { isBlackVisible } = useContext(SidebarContext);
  return (
    <section className="flex h-auto w-full flex-col lg:items-center xl:h-[650px] xl:flex-row">
      <div className="flex h-auto w-full items-center justify-center bg-wheyBg lg:h-full xl:w-1/2">
        <div
          className={
            isBlackVisible
              ? "z-10 flex flex-col items-center justify-center gap-2 pb-6 lg:w-full lg:items-start"
              : "flex flex-col items-center justify-center gap-2 pb-6 lg:w-full lg:items-start"
          }
        >
          <picture className="pointer-events-none flex w-full items-center justify-center">
            <source srcSet={creatineImgSmall} media="(min-width: 1024px)" />
            <img
              src={creatineImgSmall}
              alt="Best creatine VitaBoost"
              draggable="false"
            />
          </picture>
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <span className="text-stroke text-center font-special text-4xl text-yellow lg:text-left">
              Creatine
            </span>
            <span className="text-center font-primary text-2xl font-semibold text-white sm:w-96  lg:text-lg xl:w-96">
              Unleash your strength with our enhanced creatine formula for
              optimal muscle power and growth!
            </span>
            <Link to="/creatine" className="-z-1">
              <DiscoverButton />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full lg:h-full xl:w-1/2">
        <img
          src="https://i.shgcdn.com/b80092dc-b00e-4bf9-a68d-0e29b04488b9/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
          alt=""
          className="h-full w-full"
        />
      </div>
    </section>
  );
};

export default creatineSection;
