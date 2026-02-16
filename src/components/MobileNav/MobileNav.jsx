import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbBrandGmail } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./MobileNav.css";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const socialLinks = [
    {
      label: "Whatsapp",
      icon: <FaWhatsapp className="text-3xl" />,
      bg: "bg-[#25D366]",
      link: "https://wa.me/917021552408?text=Hello!%20Hemanshu%20I%20just%20came%20across%20your%20portfolio.",
    },
    {
      label: "Github",
      icon: <FaGithub className="text-3xl" />,
      bg: "bg-[#333333]",
      link: "https://github.com/Hemanshujc1",
    },
    {
      label: "LinkedIn",
      icon: <FaLinkedin className="text-3xl" />,
      bg: "bg-[#0077B5]",
      link: "https://www.linkedin.com/in/hemanshuchoudhary/",
    },
    {
      label: "Gmail",
      icon: <TbBrandGmail className="text-3xl" />,
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

  const sidebarVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <div className="admin-mobile-nav-root">
      {/* Open Button (Lives in Navbar) */}
      {!open && (
        <div className="fixed top-6 right-6 z-[50]">
          <button
            onClick={() => setOpen(true)}
            className="text-3xl text-accent p-2 rounded-full hover:bg-accent/10 transition-colors backdrop-blur-sm bg-primary/20 border border-transparent hover:border-accent/20 shadow-lg"
            aria-label="Open menu"
          >
            <GiHamburgerMenu />
          </button>
        </div>
      )}

      {/* Portal for Overlay (Lives in Body) */}
      {createPortal(
        <AnimatePresence>
          {open && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
                className="fixed inset-0 bg-primary/60 backdrop-blur-sm z-[9998]"
              />

              {/* Side Drawer */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed top-0 right-0 h-[100dvh] w-full sm:w-[85vw] max-w-sm bg-secondary/95 backdrop-blur-xl z-[9999] shadow-2xl border-l border-lightest-slate/10 overflow-y-auto"
              >
                {/* Close Button (Inside Drawer) */}
                <div className="absolute top-6 right-6 z-[10000]">
                  <button
                    onClick={() => setOpen(false)}
                    className="text-3xl text-accent p-2 rounded-full hover:bg-accent/10 transition-colors bg-primary/20 border border-transparent hover:border-accent/20 shadow-lg"
                    aria-label="Close menu"
                  >
                    <RxCross1 />
                  </button>
                </div>

                <div className="flex flex-col min-h-full p-8 pt-24">
                  <div className="flex flex-col gap-8 items-center w-full">
                    {/* Menu Items */}
                    <div className="flex flex-col gap-6 w-full text-center">
                      {menuItems.map(({ menu, navlink }, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + index * 0.1 }}
                        >
                          <Link
                            to={navlink}
                            className="text-2xl font-bold text-lightest-slate hover:text-accent transition-colors block py-3 tracking-widest border-b border-transparent hover:border-accent/10"
                            onClick={() => setOpen(false)}
                          >
                            {menu}
                          </Link>
                        </motion.div>
                      ))}
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-lightest-slate/10 my-4" />

                    {/* Social Links */}
                    <div className="grid grid-cols-2 gap-4 w-full">
                      {socialLinks.map(({ label, icon, link }, index) => (
                        <motion.a
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center justify-center p-4 rounded-xl bg-tertiary text-lightest-slate hover:text-accent hover:-translate-y-1 transition-all duration-300 shadow-md border border-lightest-slate/5 hover:border-accent/20 gap-2"
                        >
                          <span className="text-accent text-2xl">{icon}</span>
                          <span className="font-medium text-xs uppercase tracking-wider">
                            {label}
                          </span>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </div>
  );
};

export default MobileNav;
