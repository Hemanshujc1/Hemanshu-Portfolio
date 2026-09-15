import React from "react";
import LandingPage from "../LandingPage/LandingPage";
import ServicesSection from "../ServicesSection/ServicesSection";
import PackagesSection from "../PackagesSection/PackagesSection";
import Showroom from "../ShowRoom/ShowRoom";
import Contactsection from "../Contactsection/Contactsection";

const Main = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden pb-0 pt-16 flex flex-col gap-8">
      <LandingPage />
      <ServicesSection />
      <PackagesSection />
      <Showroom />
      <Contactsection />
    </div>
  );
};

export default Main;
