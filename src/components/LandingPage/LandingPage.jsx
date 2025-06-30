import React, { useRef, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import gsap from "gsap";
import Button from "../Button/Button";
import "./LandingPage.css";

const LandingPage = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!containerRef.current || !imageRef.current) return;

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(
          containerRef.current.children,
          {
            opacity: 0,
            y: 100,
            duration: 1.3,
            stagger: 0.3, 
          },
          0
        );

        tl.from(
          imageRef.current,
          {
            opacity: 0,
            x: 100,
            duration: 1.5,
          },
          "-=0.8" 
        );
      }, containerRef); 

      return () => ctx.revert(); 
    }, 100); 
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="landingpage w-screen h-[96vh] text-white px-6 mt-2 flex gap-6 items-center justify-center overflow-hidden">
      <div
        ref={containerRef}
        className="landingpagetext w-[48vw] flex flex-col gap-10 items-center text-center"
      >
        <div className="hero-title text-5xl font-semibold">
          <h3>
            <span role="img" aria-label="wave">
              ✌🏻
            </span>{" "}
            Hi there! I'm Hemanshu Choudhary
          </h3>
        </div>

        <div className="typewrittertext">
          <h3 className="text-3xl font-extrabold text-purple-600">
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

        <div className="hero-para">
          <p className="text-2xl font-semibold">
            Passionate about crafting seamless digital experiences through clean
            code and modern design.
          </p>
        </div>

        <div className="resumebutton">
          <Button
            text="Download My Resume"
            link="https://drive.google.com/file/d/1g1bd9Ed6kBs98u6-SaZ96pU2zpm8pe9v/view?usp=sharing"
            className="max-w-fit rounded-xl px-2 py-2 text-2xl"
          />
        </div>
      </div>

      <div ref={imageRef} className="landingimg border-1 rounded-xl w-[45vw]">
        <img
          src="/heroimage.png"
          alt="Hero"
          className="landingimage rounded-2xl w-[45vw] h-[60vh]"
        />
      </div>
    </section>
  );
};

export default LandingPage;
