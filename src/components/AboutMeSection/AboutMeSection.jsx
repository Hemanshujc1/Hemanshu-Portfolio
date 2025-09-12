import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutMeSection.css";

gsap.registerPlugin(ScrollTrigger);

const AboutMeSection = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(imageRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-6 px-4">
      <div className="about-section flex items-center justify-around gap-20 px-4 flex-wrap-reverse">
        <div
          className="about-desc lg:w-[75vw] flex flex-col gap-10 md:w-[90vw]"
          ref={textRef}
        >
          <h1 className="text-5xl text-center">
            The only way to do great work is to love what you do.
          </h1>
          <p className="text-3xl">
            I’m Hemanshu Choudhary, an ECE undergrad at IIIT Trichy (2022 – 2026)
            and a dedicated MERN‑stack developer. I build full‑stack web apps with
            React, Node.js, TypeScript, Vite & Tailwind CSS, transforming ideas into
            efficient, scalable solutions. As a DSA enthusiast and fast learner, I
            thrive on collaboration—delivering user‑centric software that solves
            real‑world problems.
          </p>
        </div>

        <div
          className="image overflow-hidden lg:h-[40vh] rounded-2xl shadow-[0_0_15px_15px_rgba(130,69,236,0.3)] md:h-[30vh]"
          ref={imageRef}
        >
          <img
            src="/Hemanshu_Picture.jpeg"
            alt="My pic"
            className="rounded-2xl lg:h-[40vh] md:h-[30vh] hover-effect"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
