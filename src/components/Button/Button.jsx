import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ text, link, className = "" }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link.startsWith("http")) {
      window.open(link, "_blank");
    } else {
      navigate(link);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`px-6 py-3 rounded text-accent border border-accent font-medium transition-all duration-300 ease-in-out hover:bg-accent/10 hover:shadow-glow ${className}`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
