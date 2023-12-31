import proteinImgSmall from "../../../img/products/protein/protein-small.png";
import proteinImgMedium2 from "../../../img/products/protein/protein-medium2.png";
import DiscoverButton from "../../buttons/DiscoverButton";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../../contexts/SidebarContext";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const ProteinSection = () => {
  const { isBlackVisible } = useContext(SidebarContext);
  const [sectionInView, setSectionInView] = useState(false);
  const [ref, inView] = useInView(); // Usunięcie triggerOnce: true

  const animationProps = useSpring({
    opacity: sectionInView ? 1 : 0,
    transform: sectionInView ? "translateX(0%)" : "translateX(-100%)",
    config: { duration: 1000 },
  });

  useEffect(() => {
    if (inView) {
      setSectionInView(true);
    } else {
      setSectionInView(false);
    }
  }, [inView]);
  return (
    <animated.div
      className="flex h-auto w-full flex-col lg:items-center xl:h-[650px] xl:flex-row"
      ref={ref}
      style={animationProps}
    >
      <div className=" hidden w-full lg:h-full xl:block xl:w-1/2">
        <img
          src="https://i.shgcdn.com/c5551027-e3a2-4ab5-bde3-1588188e2680/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
          alt=""
          className="h-full w-full"
        />
      </div>
      <div className="flex h-auto w-full items-center justify-center bg-wheyBg py-24 lg:h-full xl:w-1/2">
        <div
          className={
            isBlackVisible
              ? "z-10 flex flex-col items-center justify-center gap-2 p-6 pb-6 lg:w-full lg:items-start"
              : "flex flex-col items-center justify-center gap-2 p-6 pb-6 lg:w-full lg:items-start"
          }
        >
          <picture className="pointer-events-none flex w-full items-center justify-center">
            <source srcSet={proteinImgMedium2} media="(min-width: 1024px)" />
            <img
              src={proteinImgSmall}
              alt="Best protein VitaBoost"
              draggable="false"
            />
          </picture>
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <span className="text-stroke text-center font-special text-4xl text-red lg:text-left">
              Pure Whey
            </span>
            <span className="text-center font-primary text-2xl font-semibold text-white sm:w-96  lg:text-lg xl:w-96">
              Our pure whey - Now with enhanced potency, providing optimal
              muscle recovery and growth!
            </span>
            <Link to="/protein" className="-z-1">
              <DiscoverButton />
            </Link>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default ProteinSection;
