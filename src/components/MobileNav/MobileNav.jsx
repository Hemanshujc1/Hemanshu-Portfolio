import React, { useState, useRef, useEffect } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { TbBrandGmail } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import gsap from "gsap";
import "./MobileNav.css";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const socialRef = useRef([]);
  const menuRef = useRef([]);

  useEffect(() => {
    if (open) {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        socialRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.1, duration: 0.5 }
      );

      tl.fromTo(
        menuRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.1, duration: 0.5 },
        "-=0.4"
      );
    }
  }, [open]);

  useEffect(() => {
    // Prevent background scroll when nav is open
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const socialLinks = [
    {
      label: "Whatsapp",
      icon: <FaWhatsapp className="text-5xl socialicon" />,
      bg: "bg-[#25D366]",
      link: "https://wa.me/917021552408?text=Hello!%20Hemanshu%20I%20just%20came%20across%20your%20portfolio.",
    },
    {
      label: "Github",
      icon: <FaGithub className="text-5xl socialicon" />,
      bg: "bg-[#333333]",
      link: "https://github.com/Hemanshujc1",
    },
    {
      label: "LinkedIn",
      icon: <FaLinkedin className="text-5xl socialicon" />,
      bg: "bg-[#0077B5]",
      link: "https://www.linkedin.com/in/hemanshuchoudhary/",
    },
    {
      label: "Gmail",
      icon: <TbBrandGmail className="text-5xl socialicon" />,
      bg: "bg-red-600",
      link: "mailto:hemanshuwork26@gmail.com",
    },
  ];

  const menuItems = [
    { menu: "HOME", navlink: "/" },
    { menu: "ABOUT", navlink: "/About" },
    { menu: "WORK", navlink: "/Work" },
    { menu: "EXPERIENCE", navlink: "/Experience" },
    { menu: "CONTACT", navlink: "/Contact" },
  ];

  return (
    <div className="mobilenavigation relative">
      {/* Toggle Button (Hamburger or Cross) */}
      <div className="fixed top-8 right-4 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="mobilenav text-4xl font-extrabold focus:outline-none text-white"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <RxCross1 /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Fullscreen Navigation */}
      <div
        className={`fullscreennav fixed inset-0 z-40 flex flex-col transition-transform duration-500 bg-black ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ height: "100vh" }}
      >
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto flex flex-col items-center text-center">
          {/* Menu Items Section */}
          <div className="flex flex-col justify-center h-1/2 items-center w-full mt-8">
            {menuItems.map(({ menu, navlink }, index) => (
              <div
                key={index}
                ref={(el) => (menuRef.current[index] = el)}
                className="group py-2 w-full max-w-[300px] h-[20%] text-center opacity-0"
              >
                <Link
                  to={navlink}
                  className="flex items-center justify-center space-x-4"
                  onClick={() => setOpen(false)}
                >
                  <span className="handicon opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-x-2 text-3xl hidden md:inline">
                    👉
                  </span>
                  <span className="menutext text-4xl lg:text-4xl font-bold tracking-wider transition-colors duration-300 group-hover:text-purple-400 text-white">
                    {menu}
                  </span>
                </Link>
              </div>
            ))}
          </div>

          {/* Social Links Section */}
          <div className="w-full flex flex-col h-1/2">
            {socialLinks.map(({ label, icon, bg, link }, index) => (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                ref={(el) => (socialRef.current[index] = el)}
                className={`w-full h-[25%] ${bg} flex items-center justify-between px-10 opacity-0 sociallinks`}
              >
                <div>{icon}</div>
                <span className="text-white text-4xl font-bold labeltext">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
