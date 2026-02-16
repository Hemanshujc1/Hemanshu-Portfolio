import React from "react";
import { motion } from "framer-motion";
import { SkillsInfo } from "../../../constants";
import "./SkillsSection.css";

const SkillsSection = () => (
  <section id="skills" className="px-6 md:px-12 lg:px-20 py-16 bg-primary">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-lightest-slate tracking-widest">
        SKILLS
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-accent to-blue-500 mx-auto mt-4 rounded-full"></div>
      <p className="text-slate mt-6 text-lg font-light max-w-2xl mx-auto">
        A collection of my technical skills and expertise honed through various
        projects and experiences
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {SkillsInfo.map((category, index) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-secondary px-6 sm:px-8 py-8 rounded-xl border border-lightest-slate/5
         shadow-lg hover:shadow-glow/20 hover:border-accent/30 transition-all duration-300 group flex flex-col items-center"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-lightest-slate mb-6 text-center group-hover:text-accent transition-colors">
            {category.title}
          </h3>

          <div className="flex flex-wrap gap-3 justify-center w-full">
            {category.skills.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-primary border border-lightest-slate/10 rounded-lg py-2 px-4 transition-colors hover:border-accent/50 hover:bg-accent/5 shadow-sm"
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-6 h-6 object-contain"
                />
                <span className="text-sm sm:text-base text-slate font-medium group-hover:text-lightest-slate transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default SkillsSection;
