/* eslint-disable no-unused-vars */
import CreatineSection from "../components/sections/main/CreatineSection";
import PreWorkoutSection from "../components/sections/main/PreWorkoutSection";
import AboutSection from "../components/sections/about/AboutSection";
import ProteinSection from "../components/sections/main/ProteinSection";
import InvestSection from "../components/sections/about/InvestSection";
import Newsletter from "../components/newsletter/Newsletter";

const LandingPage = () => {
  return (
    <div className="mt-20">
      <PreWorkoutSection />
      <AboutSection />
      <ProteinSection />
      <InvestSection />
      <CreatineSection />
      <Newsletter />
    </div>
  );
};

export default LandingPage;
