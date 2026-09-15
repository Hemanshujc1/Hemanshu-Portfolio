import React from "react";
import Showroom from "../ShowRoom/ShowRoom";
import LandingPage from "../LandingPage/LandingPage";
import Contactsection from "../Contactsection/Contactsection";
import SkillsSection from "../SkilsSection/SkillsSection";
const Main = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden pb-0 pt-24 flex flex-col gap-12">
      <LandingPage />
      <SkillsSection />
      <Showroom />
      <Contactsection />
    </div>
  );
};

export default Main;
