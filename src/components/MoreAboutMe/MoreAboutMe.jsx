import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeadingPart from "../HeadingPart/HeadingPart";
import Button from "../Button/Button";
import "./MoreAboutMe.css";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const MoreAboutMe = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paraRefs = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      // Animate heading
      gsap.fromTo(
        headingRef.current,
        { y: -30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Animate paragraphs with stagger
      gsap.fromTo(
        paraRefs.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.6,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Animate button
      gsap.fromTo(
        buttonRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef); // scoped context for GSAP

    return () => context.revert(); // cleanup on unmount
  }, []);

  return (
    <section
      ref={sectionRef}
      className="Aboutme-section flex flex-col gap-5 flex-wrap px-4"
    >
      <div ref={headingRef}>
        <HeadingPart text="More About Me.." />
      </div>

      <div className="aboutpara text-2xl flex flex-col gap-6 items-center px-5">
        {[
          `I’ve channeled my curiosity into full-stack web development. Every day, I dive into React, Node.js, TypeScript, Vite, and Tailwind CSS - building apps that are as performant as they are user‑friendly.`,
          `Beyond MERN, I’m honing my problem‑solving skills through DSA challenges and hands‑on projects in Next.js, TypeScript, and Tailwind CSS. Whether it’s refining an algorithm or architecting a new feature, I thrive on translating complex requirements into clean, maintainable code.`,
          `When I’m not coding, you’ll find me sketching out ideas for side projects or exploring Web3 protocols. I thrive on collaboration—pair‑programming with peers, gathering feedback, and iterating fast to bring concepts to life.`,
          `I’m always open to new opportunities—internships, freelance gigs, or team projects. If you’re looking for a passionate developer who learns quickly and delivers impactful solutions, let’s connect and create something great together!`,
        ].map((text, index) => (
          <p
            key={index}
            ref={(el) => (paraRefs.current[index] = el)}
            className="text-left"
          >
            {text}
          </p>
        ))}

        <div className="max-w-fit" ref={buttonRef}>
          <Button
            text="Download My Resume"
            link="https://drive.google.com/file/d/1g1bd9Ed6kBs98u6-SaZ96pU2zpm8pe9v/view?usp=sharing"
            className="p-2 rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default MoreAboutMe;
