import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi"; // Added import for icons

const ProjectCard = ({
  title,
  description,
  image,
  stack = [],
  links,
  reverse,
}) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: reverse ? 50 : -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: reverse ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  const githubLink = links?.find((link) => link.label === "GitHub")?.url;
  const previewLink = links?.find((link) => link.label === "Preview")?.url;

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 py-8 md:py-12 bg-primary">
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`flex flex-col ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center gap-8 lg:gap-16 max-w-7xl mx-auto`}
      >
        {/* Image Section */}
        <div className="w-full lg:w-3/5 group">
          <motion.div
            ref={imageRef}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="relative overflow-hidden rounded-lg shadow-xl border border-lightest-slate/10 bg-secondary"
          >
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300 z-10 w-full h-full"></div>
            <img
              src={image}
              alt={title}
              className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
            />
          </motion.div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-2/5 flex flex-col gap-6 text-center lg:text-left">
          <motion.div ref={textRef}>
            <span className="text-accent font-mono text-sm tracking-widest uppercase mb-2 block">
              Featured Project 
            </span>
            <h3 className="text-3xl md:text-3xl font-bold text-lightest-slate mb-4 group-hover:text-accent transition-colors">
              {title}
            </h3>

            <div className="bg-secondary/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-lightest-slate/5 mb-6 text-slate hover:shadow-glow/10 transition-shadow">
              <p className="leading-relaxed">{description}</p>
            </div>

            {stack && stack.length > 0 && (
              <ul className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 font-mono font-bold text-sm text-slate bg-[#302f2f] p-6 rounded-lg shadow-lg border border-lightest-slate/5">
                {stack.map((item, index) => (
                  <li key={index} className="flex items-center gap-1.5">
                    <span className="text-accent">▹</span> {item}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex gap-6 justify-center lg:justify-start">
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-lightest-slate hover:text-accent transition-colors text-2xl"
                  aria-label="GitHub Link"
                >
                  <FiGithub />
                </a>
              )}
              {previewLink && (
                <a
                  href={previewLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-lightest-slate hover:text-accent transition-colors text-2xl"
                  aria-label="Live Demo Link"
                >
                  <FiExternalLink />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
