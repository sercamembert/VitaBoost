import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import manImgLarge from "../../../img/man/man-large.png";
import ButtonBlue from "../../buttons/ButtonBlue";
import vitaminImg from "../../../img/vitamins-icon/vitamins-icon.png";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const InvestSection = () => {
  const [sectionInView, setSectionInView] = useState(false);
  const [ref, inView] = useInView(); // Usunięcie triggerOnce: true

  const animationProps = useSpring({
    opacity: sectionInView ? 1 : 0,
    transform: sectionInView ? "translateY(0%)" : "translateY(-50%)",
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
      className="flex h-auto flex-col lg:flex-row"
      ref={ref}
      style={animationProps}
    >
      <div className="flex h-full w-auto flex-col items-center justify-center gap-4 bg-green p-6 py-24 lg:h-[500px] lg:w-1/2 xl:h-[600px] 2xl:h-[650px]">
        <h1 className="text-4xl font-bold text-invest md:w-[70%] lg:text-left xl:w-[500px]">
          Invest in Your Health with VitaBoost
        </h1>
        <p className="text-2xl font-semibold text-white md:w-[70%] xl:w-[500px]">
          Discover the powerful impact of VitaBoost on your well-being. Our
          scientifically formulated supplements provide essential nutrients to
          support your body and mind. Invest in your health today.
        </p>
        <div className="flex gap-4 md:w-[70%] xl:w-[500px]">
          <Link
            to="/#products"
            onClick={() => {
              window.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <ButtonBlue text="Check Offer" />
          </Link>
          <img src={vitaminImg} alt="Consume supplements become stronger" />
        </div>
      </div>
      <picture className="hidden w-auto lg:block lg:w-1/2">
        <source srcSet={manImgLarge} media="(min-width: 1536px)" />
        <animated.img
          src={manImgLarge}
          alt="Become Healthy with VitaBoost supplements"
          draggable="false"
          className="h-full w-full object-cover"
        />
      </picture>
    </animated.div>
  );
};

export default InvestSection;
