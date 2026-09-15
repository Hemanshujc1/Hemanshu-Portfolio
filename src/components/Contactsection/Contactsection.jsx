import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { TbBrandGmail } from "react-icons/tb";

const Contactsection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-24 mb-10 text-center max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">
          What's Next?
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-lightest-slate mb-6">
          Get In Touch
        </h2>
        <p className="text-slate text-lg leading-relaxed max-w-xl mx-auto mb-10">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>

        <a
          href="mailto:hemanshuwork26@gmail.com"
          className="inline-block px-10 py-5 text-accent border border-accent rounded-md font-mono text-sm transition-all hover:bg-accent/10 hover:shadow-[0_0_20px_rgba(100,255,218,0.1)] hover:-translate-y-1"
        >
          Say Hello
        </a>

        <div className="flex justify-center gap-8 mt-16">
          <a
            href="https://github.com/Hemanshujc1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-accent transition-colors hover:-translate-y-1 transform duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/hemanshuchoudhary/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-accent transition-colors hover:-translate-y-1 transform duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:hemanshuwork26@gmail.com"
            className="text-slate hover:text-accent transition-colors hover:-translate-y-1 transform duration-300"
            aria-label="Email"
          >
            <TbBrandGmail size={24} />
          </a>
          <a
            href="https://wa.me/917021552408"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-accent transition-colors hover:-translate-y-1 transform duration-300"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contactsection;
