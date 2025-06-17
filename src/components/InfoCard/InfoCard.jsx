import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./InfoCard.css";

gsap.registerPlugin(ScrollTrigger);

const InfoCard = ({
  logo,
  alt,
  company,
  duration,
  department,
  result,
  descriptionPoints,
  companylink,
}) => {
  const cardRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(logoRef.current, {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%", // when top of card hits 80% of viewport
          toggleActions: "play none none none",
        },
      });

      gsap.from(cardRef.current, {
        y: 50,
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert(); // clean up
  }, []);

  return (
    <div
      className="Experiencecard flex gap-20 justify-center items-center flex-wrap"
      ref={cardRef}
    >
      <div
        className="Experience-logo lg:w-[180px] lg:h-[180px] md:h-[150px] md:w-[150px] rounded-2xl bg-white flex items-center justify-center overflow-hidden shadow-[0_0_15px_15px_rgba(130,69,236,0.3)]"
        ref={logoRef}
      >
        <a href={companylink} target="_blank" rel="noopener noreferrer">
          <img
            src={logo}
            alt={alt || company}
            className="object-contain w-[200px] h-[200px]"
          />
        </a>
      </div>
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
            {descriptionPoints.map((point, index) => (
              <li key={index}>⚡ {point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
