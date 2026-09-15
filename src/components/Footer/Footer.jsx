import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-12 bg-secondary text-center border-t border-lightest-slate/10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded bg-gradient-to-tr from-accent to-blue-500 flex items-center justify-center font-mono font-bold text-primary text-xs">
              DS
            </span>
            <span className="font-bold text-lightest-slate tracking-tight text-lg">
              Dev Solutions
            </span>
          </div>
          <p className="text-slate text-xs mt-1 max-w-sm text-center md:text-left">
            Websites, AI-Generated Videos, Video Editing & High-ROI Meta Ads.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-xs font-mono text-slate">
          <a href="/Services" className="hover:text-accent transition-colors">Services</a>
          <a href="/Packages" className="hover:text-accent transition-colors">Affordable Packages</a>
          <a href="/Projects" className="hover:text-accent transition-colors">Projects</a>
          <a href="/About" className="hover:text-accent transition-colors">About Us</a>
          <a href="https://wa.me/917021552408" target="_blank" rel="noreferrer" className="text-accent hover:underline">
            WhatsApp Support
          </a>
        </div>

        <div className="text-slate/60 text-xs font-mono">
          &copy; {new Date().getFullYear()} Dev Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
