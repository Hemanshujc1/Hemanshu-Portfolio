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
        className={`bg-purple-600 font-semibold border border-white text-white transition-all duration-300 ease-in-out hover:bg-black hover:scale-105 hover:shadow-lg ${className}`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
