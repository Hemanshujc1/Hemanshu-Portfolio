import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./InfoCard.css";

const InfoCard = ({
  logo,
  alt,
  company,
  duration,
  department,
  result,
  descriptionPoints,
  companylink,
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex flex-col md:flex-row items-center bg-secondary/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-lightest-slate/10 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-glow/20 group"
      >
        <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 bg-white rounded-full p-2 mb-6 md:mb-0 md:mr-8 border-2 border-accent/20 group-hover:border-accent/50 transition-colors duration-300 flex items-center justify-center overflow-hidden shadow-lg">
          <a
            href={companylink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full flex items-center justify-center"
          >
            <img
              src={logo}
              alt={alt || company}
              className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
            />
          </a>
        </div>

        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold text-lightest-slate mb-2 group-hover:text-accent transition-colors duration-300">
            {company}
          </h3>
          <p className="text-lg md:text-xl text-slate font-medium mb-3">
            {department}
          </p>
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-slate/80 text-sm md:text-base">
            <span className="bg-primary/50 px-3 py-1 rounded-full border border-slate/10">
              {duration}
            </span>
            <span className="hidden md:inline w-1 h-1 bg-slate/50 rounded-full"></span>
            <span>{result}</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="mt-6 bg-secondary/50 backdrop-blur-sm rounded-xl p-6 border border-lightest-slate/10"
      >
        <ul className="flex flex-col gap-4">
          {descriptionPoints.map((point, index) => (
            <li
              key={index}
              className="flex gap-3 text-base leading-relaxed text-slate"
            >
              <span className="text-accent mt-1">⚡</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default InfoCard;
