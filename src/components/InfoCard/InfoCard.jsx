import React from "react";
import Tilt from "react-parallax-tilt";
import "./InfoCard.css"

const   InfoCard = ({ logo, alt, company, duration, department, result, descriptionPoints }) => (
  <div className="Experiencecard flex gap-20 justify-center items-center flex-wrap">
     <Tilt
        tiltMaxAngleX={40}
        tiltMaxAngleY={40}
        perspective={1200}
        scale={1.15}
        transitionSpeed={1000}
        gyroscope={true}
      >
    <div className="Experience-logo lg:w-[180px] lg:h-[180px] md:h-[150px] md:w-[150px] rounded-2xl bg-white flex items-center justify-center overflow-hidden shadow-[0_0_15px_15px_rgba(130,69,236,0.3)]">
      <img src={logo} alt={alt || company} className="object-contain  w-[200px] h-[200px]" />
    </div>
    </Tilt>
    <div className="Exp-card rounded-2xl p-[4px] overflow-hidden bg-ambient shadow-ambient flex flex-col items-center lg:w-[60vw] md:w-[90vw]">
      <div className="Experience-heading bg-purple-700 flex text-white w-full justify-around text-center rounded-t-2xl">
        <div className="Experience-heading-1 flex-col justify-around">
          <h1>{company}</h1>
          <h2>{department}</h2>
        </div>
        <div className="Experience-heading-1 flex-col justify-around">         
          <h3>{duration}</h3>
          <h3>{result}</h3>
        </div>
      </div>
      <div className="Experience-desc bg-gray-900 text-white rounded-b-2xl w-full">
        <ul className="py-5 px-4 flex flex-col gap-6">
          {descriptionPoints.map((descriptionPoints, index) => (
            <li key={index}>⚡ {descriptionPoints}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default InfoCard;
