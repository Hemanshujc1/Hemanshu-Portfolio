import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import MobileNav from "../MobileNav/MobileNav";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const brandText = "Dev Solutions";

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 w-full z-[6000] px-6 lg:px-12 py-3.5 flex justify-between items-center backdrop-blur-md bg-primary/90 border-b border-lightest-slate/10 shadow-lg"
    >
      <div className="logo relative z-50">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-accent to-blue-500 flex items-center justify-center font-mono font-black text-primary text-lg shadow-glow">
            DS
          </div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <span className="text-xl md:text-2xl font-bold text-lightest-slate group-hover:text-accent transition-colors tracking-tight">
              {brandText}
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-accent -mt-1 hidden sm:block">
              Digital Growth Studio
            </span>
          </motion.div>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="hidden lg:flex items-center gap-8"
      >
        <ul className="flex gap-7 text-sm font-medium text-lightest-slate">
          <NavLi to="/" text="Home" />
          <NavLi to="/Services" text="Services" />
          <NavLi to="/Packages" text="Packages" />
          <NavLi to="/Projects" text="Projects" />
          <NavLi to="/About" text="About" />
        </ul>

        <a
          href="https://wa.me/917021552408?text=Hello%20Dev%20Solutions!%20I%20would%20like%20to%20get%20a%20free%20quote%20for%20my%20business."
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-lg bg-accent text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-glow hover:scale-105 active:scale-95"
        >
          Get Free Quote
        </a>
      </motion.div>

      {/* Mobile Navigation */}
      <div className="lg:hidden z-50">
        <MobileNav />
      </div>
    </motion.nav>
  );
};

const NavLi = ({ to, text }) => (
  <Link to={to}>
    <li className="relative group cursor-pointer hover:text-accent transition-colors duration-300">
      {text}
      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
    </li>
  </Link>
);

export default Navbar;
