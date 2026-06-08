import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeadingPart from "../HeadingPart/HeadingPart";
import Button from "../Button/Button";
import "./MoreAboutMe.css";

const MoreAboutMe = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="Aboutme-section flex flex-col gap-10 px-6 md:px-12 lg:px-24 py-16 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        <HeadingPart text="More About Me.." />
      </motion.div>

      <motion.div
        className="aboutpara text-xl md:text-2xl flex flex-col gap-8 text-gray-300 leading-relaxed font-light"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {[
          `My journey into software engineering started with a deep curiosity for how systems operate at scale. As an ECE graduate from IIIT Trichy, I've channeled this curiosity into building end-to-end applications—from engineering multi-vendor e-commerce marketplaces to architecting enterprise-grade employee onboarding platforms.`,
          `During my time as a Software Engineer Intern at Vakrangee, I spearheaded the frontend development for a nationwide customer onboarding portal and engineered secure backend pipelines. I thrive on tackling complex architectural challenges, optimizing API layers with strict security practices, and designing normalized database schemas.`,
          `Beyond product development, I have a strong foundation in Data Structures and Algorithms, having solved over 500 problems across various platforms. I also believe in the power of community and leadership, having served as the President of the Entrepreneurship Cell at my university, where I helped foster a culture of innovation.`,
          `I am constantly seeking opportunities to leverage my full-stack expertise in a challenging, fast-paced environment. If you're looking for an engineer who is dedicated to building secure, high-performance systems and is eager to make a tangible impact, I'd love to connect.`,
        ].map((text, index) => (
          <motion.p
            key={index}
            variants={itemVariants}
            className="text-left text-slate/90"
          >
            {text}
          </motion.p>
        ))}

        <motion.div
          className="mt-4 flex justify-center lg:justify-start"
          variants={itemVariants}
        >
          <Button
            text="Download My Resume"
            link="https://drive.google.com/file/d/1g1bd9Ed6kBs98u6-SaZ96pU2zpm8pe9v/view?usp=sharing"
            className="!px-8 !py-3 !text-lg !rounded-md !border-accent !text-accent hover:!bg-accent/10 shadow-[0_0_20px_rgba(100,255,218,0.1)] hover:shadow-[0_0_30px_rgba(100,255,218,0.2)] transition-all"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MoreAboutMe;
