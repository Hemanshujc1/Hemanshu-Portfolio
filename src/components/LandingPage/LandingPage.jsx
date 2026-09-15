import React, { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../Button/Button";
import { Github, Linkedin, Mail } from "lucide-react";

const LandingPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yVisual = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.section
      className="landingpage relative w-full min-h-[90vh] flex items-center justify-center px-6 md:px-16 lg:px-24 py-20 overflow-hidden bg-primary"
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Decorators */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-accent/10 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[30vw] h-[30vw] bg-blue-500/10 rounded-full blur-[100px] mix-blend-screen"></div>

        {/* Subtle dot matrix grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12 z-10 pt-10">
        {/* Left Content */}
        <motion.div
          className="flex-1 flex flex-col gap-6 md:gap-8 items-start text-left"
          style={{ y: yText, opacity }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-start w-full"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-accent text-sm font-medium border border-accent/20 mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(100,255,218,0.05)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Available for new opportunities
            </span>
            <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-lightest-slate leading-[1.1] mb-2 w-full">
              Building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-accent bg-[length:200%_auto] animate-[gradient_8s_ease_infinite]">
                digital products
              </span>
              <br />
              that matter.
            </h1>
          </motion.div>

          <motion.div
            className="typewrittertext text-xl md:text-2xl lg:text-3xl font-medium text-slate h-10 mb-3 flex items-center flex-wrap"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="mr-2">I build</span>
            <span className="text-accent font-semibold">
              <Typewriter
                words={[
                  "Scalable Web Apps.",
                  "Performant Backends.",
                  "Interactive UIs.",
                  "Full Stack Solutions.",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </motion.div>

          <motion.p
            className="hero-para text-base md:text-lg text-slate w-full max-w-xl leading-relaxed"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Passionate about crafting seamless digital experiences through clean
            architecture and modern design. From enterprise backends to
            beautiful frontends, I turn complex problems into elegant solutions.
          </motion.p>

          <motion.div
            className="mt-3 flex flex-wrap items-center gap-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              text="Download Resume"
              link="https://drive.google.com/file/d/1g1bd9Ed6kBs98u6-SaZ96pU2zpm8pe9v/view?usp=sharing"
              className="!px-8 !py-4 !text-lg !rounded-md !bg-accent/10 !border-accent !text-accent hover:!bg-accent hover:!text-primary transition-all duration-300 shadow-[0_0_20px_rgba(100,255,218,0.15)] font-semibold"
            />

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Hemanshujc1"
                target="_blank"
                rel="noreferrer"
                className="text-slate hover:text-accent transition-colors duration-300 p-3 border border-slate/20 rounded-full hover:border-accent/50 hover:bg-accent/10 bg-secondary/50 backdrop-blur-sm"
              >
                <Github size={22} />
              </a>
              <a
                href="https://linkedin.com/in/hemanshuchoudhary"
                target="_blank"
                rel="noreferrer"
                className="text-slate hover:text-accent transition-colors duration-300 p-3 border border-slate/20 rounded-full hover:border-accent/50 hover:bg-accent/10 bg-secondary/50 backdrop-blur-sm"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:hemanshuwork26@gmail.com"
                className="text-slate hover:text-accent transition-colors duration-300 p-3 border border-slate/20 rounded-full hover:border-accent/50 hover:bg-accent/10 bg-secondary/50 backdrop-blur-sm"
              >
                <Mail size={22} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Visual Element */}
        <motion.div
          className="hidden lg:flex flex-1 justify-end relative h-full min-h-[500px] w-full"
          style={{ y: yVisual, opacity }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {/* Glassmorphism Abstract Composition */}
          <div className="relative w-full max-w-[450px] aspect-square mx-auto lg:mr-0">
            {/* Main Glass Card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-secondary/40 backdrop-blur-xl border border-lightest-slate/10 rounded-2xl shadow-2xl flex flex-col justify-between p-6 z-20 hover:border-accent/30 transition-colors duration-500">
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-slate/50 text-xs font-mono border border-slate/20 px-2 py-1 rounded">
                  portfolio.jsx
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-4 items-center justify-center mt-6">
                <div className="w-full h-full border border-dashed border-lightest-slate/10 rounded-xl flex items-center justify-center bg-primary/30 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-blue-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="font-mono text-accent/90 text-xl font-bold tracking-widest z-10">
                    &lt;Hello_World /&gt;
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <motion.div
              animate={{ y: [-15, 15, -15], rotate: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 right-4 w-28 h-28 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-white/10 rounded-2xl z-30 shadow-xl"
            />
            <motion.div
              animate={{ y: [10, -20, 10], rotate: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-8 left-0 w-32 h-32 bg-gradient-to-tr from-accent/20 to-teal-500/20 backdrop-blur-lg border border-accent/20 rounded-full z-10 shadow-lg"
            />

            {/* Tech Stack Pills */}
            <motion.div
              animate={{ x: [-10, 10, -10] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/3 -left-8 bg-secondary/90 backdrop-blur-xl border border-lightest-slate/10 px-5 py-2.5 rounded-full z-30 shadow-2xl flex items-center gap-2"
            >
              <span className="text-blue-400 font-semibold text-sm tracking-wide">
                React
              </span>
            </motion.div>
            <motion.div
              animate={{ x: [10, -10, 10] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute bottom-1/3 -right-6 bg-secondary/90 backdrop-blur-xl border border-lightest-slate/10 px-5 py-2.5 rounded-full z-30 shadow-2xl flex items-center gap-2"
            >
              <span className="text-green-400 font-semibold text-sm tracking-wide">
                Node.js
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default LandingPage;
