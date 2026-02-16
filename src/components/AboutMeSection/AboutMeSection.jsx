import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./AboutMeSection.css";

const AboutMeSection = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  const textInView = useInView(textRef, { once: true, margin: "-100px" });
  const imageInView = useInView(imageRef, { once: true, margin: "-100px" });

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-primary text-slate">
      <div className="about-section flex flex-col lg:flex-row items-center justify-between gap-16 max-w-7xl mx-auto">
        <motion.div
          className="about-desc flex-1 flex flex-col gap-8 text-center lg:text-left"
          ref={textRef}
          initial={{ opacity: 0, x: -50 }}
          animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-lightest-slate">
            Engineering digital experiences with precision and passion.
          </h1>
          <p className="text-xl md:text-2xl text-slate leading-relaxed font-light">
            I’m{" "}
            <span className="text-accent font-medium">Hemanshu Choudhary</span>,
            a final-year ECE undergraduate at IIIT Trichy and a passionate Full
            Stack Developer. I specialize in building high-performance web
            applications using the
            <span className="text-accent font-medium">
              {" "}
              MERN Stack (MongoDB, Express, React, Node.js)
            </span>
            and modern frameworks like Next.js. My focus is on writing clean,
            scalable code that solves real-world problems and delivers
            exceptional user experiences.
          </p>
        </motion.div>

        <motion.div
          className="image relative group"
          ref={imageRef}
          initial={{ opacity: 0, x: 50 }}
          animate={imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="absolute -inset-2 bg-accent/20 rounded-md blur-lg opacity-75 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative rounded-md overflow-hidden bg-secondary shadow-xl border border-lightest-slate/10">
            <img
              src="/Hemanshu_Picture.png"
              alt="Hemanshu Choudhary"
              className="w-full max-w-sm md:max-w-md h-auto object-cover filter grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMeSection;
