import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { agencyInfo } from "../../data/agencyData";

const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappUrl = `https://wa.me/${agencyInfo.whatsappNumber}?text=${encodeURIComponent(
    "Hello Dev Solutions! I'm interested in your services and would like to discuss a project."
  )}`;

  return (
    <aside aria-label="WhatsApp Support" className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip on Desktop */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="hidden sm:flex items-center bg-secondary text-lightest-slate text-sm font-medium px-4 py-2 rounded-xl border border-tertiary shadow-2xl backdrop-blur-md"
          >
            <span>Chat with us on WhatsApp</span>
            <span className="w-2 h-2 bg-emerald-500 rounded-full ml-2 animate-pulse" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Dev Solutions on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/40 transition-colors duration-200 cursor-pointer group"
      >
        {/* Pulse / Ping Animation Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping -z-10 group-hover:opacity-75" />

        <FaWhatsapp className="text-2xl sm:text-3xl text-white drop-shadow-md" />

        {/* Small Active Dot */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-emerald-300 border-2 border-primary rounded-full" />
      </motion.a>
    </aside>
  );
};

export default FloatingWhatsApp;
