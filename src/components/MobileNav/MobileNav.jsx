import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import Gmailicon from "../Gmailicon/Gmailicon";
import { Link } from "react-router-dom";
import "./MobileNav.css";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const socialLinks = [
    {
      label: "Github",
      icon: <FaGithub className="text-5xl" />,
      bg: "bg-[#333333]",
      link: "https://github.com/Hemanshujc1",
    },
    {
      label: "LinkedIn",
      icon: <FaLinkedin className="text-5xl" />,
      bg: "bg-[#0077B5]",
      link: "https://www.linkedin.com/in/hemanshuchoudhary/",
    },
    {
      label: "Whatsapp",
      icon: <FaWhatsapp className="text-5xl" />,
      bg: "bg-[#25D366]",
      link: "https://wa.me/917021552408?text=Hello!%20Hemanshu%20I%20just%20came%20across%20your%20portfolio.",
    },
    {
      label: "Gmail",
      icon: <Gmailicon className="text-5xl" />,
      bg: "bg-blue-600",
      link: "mailto:hemanshuwork26@gmail.com",
    },
  ];

  const menuItems = [
    { menu: "RESUME", navlink: "/" },
    { menu: "HOME", navlink: "/" },
    { menu: "ABOUT", navlink: "/About" },
    { menu: "WORK", navlink: "/Work" },
    { menu: "EXPERIENCE", navlink: "/Experience" },
    { menu: "CONTACT", navlink: "/Contact" },
  ];

  return (
    <div className="">
      {/* Hamburger Button */}
      <div className="">
        <button
          onClick={() => setOpen(!open)}
          className="mobilenav text-4xl font-extrabold focus:outline-none"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <RxCross1 /> : <GiHamburgerMenu />}
        </button>
      </div>
      {/* Fullscreen Navigation */}
      <div
        className={`fullscreennav fixed inset-0 z-40 flex transition-transform duration-500 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          minHeight: "-webkit-fill-available", // Safari fix
        }}
      >
        {/* Social Links Section */}
        <div className="socialnav w-1/2 h-full flex flex-row">
          {socialLinks.map(({ label, icon, bg, link }, index) => (
            <div
              key={index}
              className={`socialnavgrp w-1/4 h-full ${bg} flex items-center justify-center`}
            >
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-full h-full"
              >
                <div className="socialnavgrplink rotate-[-90deg] flex items-center gap-8 origin-center">
                  <div className="flex-shrink-0 socialnavgrplinktexticon">{icon}</div>
                  <span className="socialnavgrplinktext text-4xl font-extrabold whitespace-nowrap">
                    {label}
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Menu Items Section */}
        {/* <div className="menunav w-1/2 h-full flex flex-col justify-center items-end px-10 bg-gradient-to-b from-black to-gray-900 overflow-y-auto"> */}
        <div className="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:50px_50px]"></div>

        <div className="menunav w-1/2 h-full flex flex-col justify-center items-center md:items-end px-10 bg-radial-gradient-to-b from-black to-gray-900 bg-[size:50px_50px] overflow-y-auto text-center">

          {menuItems.map(({ menu, navlink }, index) => (
            <div
              key={index}
              className="menunavlink group py-4 w-full max-w-[300px] text-right"
            >
              <Link
                to={navlink}
                className="flex items-center justify-end space-x-4"
                onClick={() => setOpen(false)}
              >
                {/* <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-x-2 text-5xl">
                  👉
                </span> */}
                <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-x-2 text-5xl hidden md:inline">
                  👉
                </span>

                <span className="text-4xl lg:text-5xl font-bold tracking-wider transition-colors duration-300 group-hover:text-purple-400">
                  {menu}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
