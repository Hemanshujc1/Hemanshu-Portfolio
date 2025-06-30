import React from "react";
import { SkillsInfo } from "../../../constants";
import "./SkillsSection.css";

const SkillsSection = () => (
  <section id="skills" className="px-[12vw] md:px-[7vw] lg:px-[20vw]">
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A collection of my technical skills and expertise honed through various
        projects and experiences
      </p>
    </div>

    <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
         shadow-[0_0_10px_10px_rgba(130,69,236,0.3)] hover:border-purple-600 hover:border-4 hover:shadow-none p-1"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
            {category.title}
          </h3>

          <div className="flex flex-wrap gap-5 skillgrp lg:align-middle items-center justify-center">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="skillbox flex flex-wrap w-[145px] items-center justify-center space-x-1 bg-transparent border-2 border-gray-700 rounded-2xl py-1 px-1 sm:py-1.5 sm:px-1.5 text-center tilt-hover"
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-4 h-4 sm:w-6 sm:h-6"
                />
                <span className="text-xs sm:text-sm text-gray-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default SkillsSection;
