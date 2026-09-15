import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaGithub } from "react-icons/fa";
import { TbBrandGmail } from "react-icons/tb";
import { MessageCircle } from "lucide-react";
import { agencyInfo } from "../../data/agencyData";

const Contactsection = () => {
  return (
    <section id="contact" className="px-6 md:px-12 py-20 bg-primary text-center max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="text-accent font-mono text-xs tracking-widest uppercase mb-3 block">
          Get In Touch
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-lightest-slate mb-3">
          Let's Build Something Great.
        </h2>
        <p className="text-slate text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-8 font-light">
          Have a website, AI video, video editing, or ad project in mind? We're just a message away.
        </p>

        {/* Minimal Direct Action Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-10">
          <a
            href={agencyInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-xl bg-accent text-white font-bold text-sm flex items-center gap-2 shadow-glow hover:scale-105 active:scale-95 transition-all"
          >
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>

          <a
            href={`mailto:rhdevsolutions@gmail.com?subject=Project%20Inquiry%20-%20Dev%20Solutions`}
            className="px-6 py-3.5 rounded-xl bg-secondary text-lightest-slate hover:text-accent border border-tertiary hover:border-accent/40 font-medium text-sm flex items-center gap-2 transition-all"
          >
            <TbBrandGmail size={18} className="text-red-400" /> Send an Email
          </a>
        </div>

        {/* Minimal Social Links */}
        <div className="flex justify-center items-center gap-6 text-slate">
          <a
            href="https://wa.me/917021552408"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition-colors"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={20} />
          </a>
          <a
            href="mailto:rhdevsolutions@gmail.com"
            className="hover:text-accent transition-colors"
            aria-label="Email"
          >
            <TbBrandGmail size={20} />
          </a>
          <a
            href="https://github.com/Hemanshujc1"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contactsection;
