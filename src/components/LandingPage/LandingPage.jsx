import React, { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../Button/Button";
import "./LandingPage.css";

const LandingPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.section
      className="landingpage relative w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 py-12 overflow-hidden bg-primary"
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] animate-pulse"></div>
      </div>

      <motion.div
        className="landingpagetext w-full max-w-4xl flex flex-col gap-6 md:gap-8 items-center text-center z-10"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center text-center w-full px-4"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20 mb-6 backdrop-blur-sm">
            Available for freelance work
          </span>
          <h1 className="hero-title text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-lightest-slate leading-tight mb-2 w-full">
            Hi, I'm <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
              Hemanshu Choudhary
            </span>
          </h1>
        </motion.div>

        <motion.div
          className="typewrittertext text-xl md:text-3xl font-medium text-slate h-8 mb-4 flex justify-center w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I build{"  "}
          <span className="text-accent font-semibold px-1">
            <Typewriter
              words={[
                "Scalable Web Apps",
                "Performant Backends",
                "Interactive UIs",
                "Full Stack Solutions",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </motion.div>

        <motion.p
          className="hero-para text-base md:text-lg text-slate w-full max-w-xl md:max-w-2xl leading-relaxed text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Passionate about crafting seamless digital experiences through clean
          code and modern design. I turn complex problems into elegant
          solutions.
        </motion.p>

        <motion.div
          className="resumebutton mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button
            text="Download Resume"
            link="https://drive.google.com/file/d/1g1bd9Ed6kBs98u6-SaZ96pU2zpm8pe9v/view?usp=sharing"
            className="!px-10 !py-4 !text-lg !rounded-full !border-accent !text-accent hover:!bg-accent/10 shadow-[0_0_20px_rgba(100,255,218,0.1)] hover:shadow-[0_0_30px_rgba(100,255,218,0.2)] transition-all duration-300"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default LandingPage;
