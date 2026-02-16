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

  const brandText = "{ Hemanshu Choudhary }";

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 w-full z-[6000] px-6 lg:px-12 py-4 flex justify-between items-center backdrop-blur-md bg-primary/90 border-b border-lightest-slate/5"
    >
      <div className="logo relative z-50 ">
        <Link to="/">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl font-bold text-accent hover:text-accent/80 transition-all duration-300"
          >
            {brandText}
          </motion.h1>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="hidden lg:flex items-center gap-8"
      >
        <ul className="flex gap-8 text-sm font-medium text-lightest-slate">
          <NavLi to="/" text="Home" />
          <NavLi to="/About" text="About" />
          <NavLi to="/Work" text="Work" />
          <NavLi to="/Experience" text="Experience" />
          <NavLi to="/Contact" text="Contact" />
        </ul>
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
