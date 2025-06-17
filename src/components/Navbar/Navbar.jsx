import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import MobileNav from "../MobileNav/MobileNav";
import gsap from "gsap";

const Navbar = () => {
  const navRef = useRef(null);
  const brandRef = useRef(null);

  useEffect(() => {
    const delayTime = 0.8;

    // Animate the entire navbar: slide from top with slight scale
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        delay: delayTime,
        ease: "power4.out",
      }
    );

    // Animate each letter of the brand text with a stagger
    const letters = brandRef.current.querySelectorAll(".char");

    gsap.fromTo(
      letters,
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        delay: delayTime + 0.2,
        stagger: 0.05,
        ease: "back.out(1.7)",
        duration: 0.6,
      }
    );
    // Animate desktop menu links (if available)
    const desktopLinks = navRef.current.querySelectorAll(".navcontent li");

    gsap.fromTo(
      desktopLinks,
      { opacity: 0, y: -10 },
      {
        opacity: 1,
        y: 0,
        delay: delayTime + 0.8,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
      }
    );
  }, []);

  // Split the brand name into individual span-wrapped letters
  const brandText = "{ Hemanshu Choudhary }";
  const renderedBrand = brandText.split("").map((char, i) => (
    <span key={i} className="char inline-block">
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  return (
    <nav
      ref={navRef}
      className="bg-ambient shadow-ambient opacity-[80%] w-full fixed top-0 px-6 py-8 flex justify-around items-center text-2xl z-[6000] font-extrabold text-white lg:px-10"
    >
      <div className="logo" ref={brandRef}>
        <Link to="/">
          <h1>{renderedBrand}</h1>
        </Link>
      </div>

      {/* Desktop Navigation */}
     
      <div className="navcontent hidden max-sm:hidden lg:flex gap-4">
  <ul className="flex gap-4">
    <Link to="/"><li>Home</li></Link>
    <Link to="/About"><li>About</li></Link>
    <Link to="/Work"><li>Work</li></Link>
    <Link to="/Experience"><li>Experience</li></Link>
    <Link to="/Contact"><li>Contact</li></Link>
  </ul>
</div>


      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
