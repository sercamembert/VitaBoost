/* eslint-disable no-unused-vars */
import CreatineSection from "../components/sections/main/CreatineSection";
import PreWorkoutSection from "../components/sections/main/PreWorkoutSection";
import AboutSection from "../components/sections/about/AboutSection";
import ProteinSection from "../components/sections/main/ProteinSection";

const LandingPage = () => {
  return (
    <div className="mt-20">
      <PreWorkoutSection />
      <AboutSection />
      <ProteinSection />
    </div>
  );
};

export default LandingPage;
