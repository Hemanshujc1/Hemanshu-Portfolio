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
        className={`bg-[#8245ec7b] border border-white text-white bg-ambient shadow-ambient ${className}`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
