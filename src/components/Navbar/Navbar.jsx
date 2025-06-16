import React from "react";
import { Link } from "react-router-dom";
import MobileNav from "../MobileNav/MobileNav";

const Navbar = () => {
  return (
    <nav className="bg-ambient shadow-ambient opacity-[80%] w-full fixed top-0 px-6 py-8 flex justify-around align-middle   items-center text-2xl z-[6000] font-extrabold text-white lg:px-10">
      <div className="logo">
        <Link to="/">
          <h1>
            <span>{"{ Hemanshu Choudhary }"}</span>
          </h1>
        </Link>
      </div>

      {/* Desktop Navigation (hidden on small screens) */}
      <div className="navcontent hidden max-sm:hidden lg:flex gap-4">
        <ul className="flex gap-4">
          <Link to="/"><li>Home</li></Link>
          <Link to="/About"><li>About</li></Link>
          <Link to="/Work"><li>Work</li></Link>
          <Link to="/Experience"><li>Experience</li></Link>
          <Link to="/Contact"><li>Contact</li></Link>
        </ul>
      </div>

      {/* Mobile Navigation (only visible on small screens) */}
      <div className="lg:hidden">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
