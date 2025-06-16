import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Button from "../Button/Button";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-background relative w-screen h-[96vh] flex items-center justify-center text-white px-6 py-6 mt-2">
      <div className="relative z-30 max-w-4xl text-center bg-gray-900 bg-opacity-70 p-6 rounded-xl shadow-lg flex flex-col justify-center items-center">
        <div className="hero-title mb-4 text-xl font-semibold bg-ambient shadow-ambient w-fit p-2 rounded-xl">
          <h3>
            <span role="img" aria-label="waving hand">✌🏻</span> Hi there! I'm Hemanshu Choudhary
          </h3>
        </div>
        <div className="typewrittertext">
          <h3 className="text-2xl font-extrabold mb-4 text-purple-600">
            I am a{" "}
            <Typewriter
              words={[
                "Coder",
                "Frontend Developer",
                "Backend Developer",
                "FullStack Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h3>
        </div>
        <p className="text-lg mb-6 font-extrabold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          inventore deserunt at consequatur ipsa! Aspernatur totam nesciunt
          commodi velit quod?
        </p>
        <Button text="Download My Resume" to="#" className="max-w-fit cvbutton" />
      </div>
      <div className="absolute inset-0 z-0">
        <video
          src="/Hemanshu.mp4"
          alt="Background"
          loop
          muted
          autoPlay
          className="w-full h-full object-fill brightness-[0.7]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
