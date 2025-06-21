import React, { useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../Button/Button";
import "./HeroSection.css";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef(null);
  const introRef = useRef(null);
  const typeRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main container fade-in
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      });

      // Intro Title
      gsap.from(introRef.current, {
        y: -30,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      });

      // Typewriter text
      gsap.from(typeRef.current, {
        opacity: 0,
        duration: 1,
        delay: 1,
        ease: "power3.out",
      });

      // Paragraph
      gsap.from(paraRef.current, {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 1.5,
        ease: "power3.out",
      });

      // Button
      gsap.from(buttonRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        delay: 2,
        ease: "back.out(1.7)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero-background relative w-screen h-[96vh] flex items-center justify-center text-white px-6 py-6 mt-2"
    >
      <div className="relative z-30 max-w-4xl text-center bg-gray-900 bg-opacity-70 p-6 rounded-xl shadow-lg flex flex-col justify-center items-center">
        <div
          ref={introRef}
          className="hero-title mb-4 text-xl font-semibold bg-ambient shadow-ambient w-fit p-2 rounded-xl"
        >
          <h3>
            <span role="img" aria-label="waving hand">
              ✌🏻
            </span>{" "}
            Hi there! I'm Hemanshu Choudhary
          </h3>
        </div>

        <div className="typewrittertext" ref={typeRef}>
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

        <p ref={paraRef} className="text-lg mb-6 font-extrabold">
          Passionate about crafting seamless digital experiences through clean
          code and modern design. Whether it's backend logic, frontend
          interfaces — I build tools that work beautifully and scale smoothly.
        </p>

        <div ref={buttonRef}>
            <Button
              text="Download My Resume"
              link="https://drive.google.com/file/d/1aA8Zl8b9sgrxGSyh-eSxHjBI289Xk2BM/view?usp=sharing"
              className="max-w-fit rounded-xl px-2 py-2"
            />
        </div>
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
