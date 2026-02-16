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
          `My journey into software development started with a curiosity for how things work under the hood. This led me to explore the full spectrum of web development, from crafting intuitive front-end interfaces to architecting robust back-end systems. I constantly challenge myself to learn new technologies and best practices to keep my skills sharp.`,
          `Beyond just writing code, I have a strong foundation in Data Structures and Algorithms, which helps me approach problems logically and efficiently. I enjoy tackling complex challenges, optimizing performance, and ensuring that every line of code contributes to a seamless final product.`,
          `When I'm not at my keyboard, I enjoy exploring new tech trends, contributing to open-source discussions, and collaborating with like-minded developers. I believe that great software is built through teamwork, open communication, and a relentless drive for improvement.`,
          `I am currently seeking opportunities to leverage my skills in a challenging and dynamic environment. If you are looking for a developer who is dedicated, adaptable, and eager to make an impact, I would love to connect and discuss how I can contribute to your team.`,
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
