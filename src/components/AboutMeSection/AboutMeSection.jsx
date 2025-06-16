import React from "react";
import Tilt from "react-parallax-tilt";
import "./AboutMeSection.css"

const AboutMeSection = () => {
  return (
    <section className="py-6 px-4">
      <div className="about-section flex items-center justify-around gap-20 px-4 flex-wrap-reverse">
        <div className="about-desc lg:w-[75vw] flex flex-col gap-10 md:w-[90vw]">
          <h1 className="text-5xl text-center">
            The only way to do great work is to love what you do.
          </h1>
          <p className="text-3xl">
          I’m Hemanshu Choudhary, an ECE undergrad at IIIT Trichy (2022 – 2026) and a dedicated MERN‑stack developer. I build full‑stack web apps with React, Node.js, TypeScript, Vite & Tailwind CSS, transforming ideas into efficient, scalable solutions. As a DSA enthusiast and fast learner, I thrive on collaboration—delivering user‑centric software that solves real‑world problems.
          </p>
        </div>
        <Tilt
        tiltMaxAngleX={40}
        tiltMaxAngleY={40}
        perspective={1200}
        scale={1.15}
        transitionSpeed={1000}
        gyroscope={true}
      >
        
        <div className="image overflow-hidden lg:h-[40vh] rounded-2xl shadow-[0_0_15px_15px_rgba(130,69,236,0.3)] md:h-[30vh]">
          <img src="/10.jpeg" alt="My pic" className="rounded-2xl lg:h-[40vh] md:h-[30vh]" />
        </div>
        </Tilt>
      </div>
    </section>
  );
};

export default AboutMeSection;
