import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ text, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link.startsWith("http")) {
      window.open(link, "_blank");
    } else {
      navigate(link);
    }
  };

  return (
    <div className="flex flex-wrap rounded-xl bg-ambient shadow-ambient">
      <button
        onClick={handleClick}
        className="rounded-xl bg-[#8245ec7b] border border-white p-3 max-w-fit"
      >
        {text}
      </button>
    </div>
  );
};


export default Button;
