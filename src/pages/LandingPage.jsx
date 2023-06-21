import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CreatineSection from "../components/sections/main/CreatineSection";
import PreWorkoutSection from "../components/sections/main/PreWorkoutSection";
import AboutSection from "../components/sections/about/AboutSection";
import ProteinSection from "../components/sections/main/ProteinSection";
import InvestSection from "../components/sections/about/InvestSection";
import Newsletter from "../components/newsletter/Newsletter";
import ProductsSection from "../components/sections/ProductsSection";
import Team from "../components/sections/Team";

const LandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#products") {
      const productsSection = document.getElementById("products");
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: "smooth" });
      }
    }

    if (location.hash === "#about") {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="mt-20 overflow-hidden">
      <PreWorkoutSection />
      <AboutSection id="about" />
      <InvestSection />
      <ProteinSection />
      <CreatineSection />
      <ProductsSection id="products" />
      <Team />
      <Newsletter />
    </div>
  );
};

export default LandingPage;
