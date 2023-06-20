import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import logoIconImgMedium from "../../../img/logo/logo-icon-medium.png";
import logoIconImgLarge from "../../../img/logo/logo-icon-large.png";
import ButtonBlue from "../../buttons/ButtonBlue";

const AboutSection = () => {
  const sectionRef = useRef();
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
    <div
      ref={sectionRef}
      className="flex h-auto flex-col items-center justify-center gap-4 p-6 py-24 lg:h-screen lg:flex-row lg:gap-16"
    >
      <animated.div
        ref={ref}
        className="flex w-auto justify-center"
        style={animationProps}
      >
        <picture>
          <source srcSet={logoIconImgLarge} media="(min-width: 1024px)" />
          <img src={logoIconImgMedium} alt="VitaBoost" draggable="false" />
        </picture>
      </animated.div>
      <div className="flex flex-col gap-2 lg:w-[400px]">
        <h1 className="text-[16px] uppercase text-primary">about us</h1>
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
