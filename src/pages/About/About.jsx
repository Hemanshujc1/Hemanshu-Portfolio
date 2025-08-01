import React from "react";
import Contactsection from "../../components/Contactsection/Contactsection";
import EducationSection from "../../components/EducationSection/EducationSection";
import AboutMeSection from "../../components/AboutMeSection/AboutMeSection";
import HeadingPart from "../../components/HeadingPart/HeadingPart";
import MoreAboutMe from "../../components/MoreAboutMe/MoreAboutMe";


const About = () => {
  return (
    <div className="flex flex-col gap-12 mt-10">
      <HeadingPart text="About Me"></HeadingPart>
      <AboutMeSection />
      <MoreAboutMe/>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      <EducationSection />
      <Contactsection />
    </div>
  );
};

export default About;
