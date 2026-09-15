import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-secondary text-center border-t border-lightest-slate/5">
      <p className="text-slate font-mono text-sm">
        Designed & Built by{" "}
        <a
          href="https://github.com/Hemanshujc1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline decoration-accent/50 underline-offset-4 transition-all"
        >
          Hemanshu Choudhary
        </a>
      </p>
      <p className="text-slate/50 text-xs mt-2 font-light">
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
