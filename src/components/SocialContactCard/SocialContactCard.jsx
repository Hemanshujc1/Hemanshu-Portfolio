import React from "react";
import "./SocialContactCard.css"

const SocialContactCard = ({
  socialmedialogo,
  mediatext,
  colorClass,
  socialmedialink,
}) => {
  return (
  
      <a href={socialmedialink} target="_blank" rel="noopener noreferrer">
        <div className={`social-box-content w-[25vw] ${colorClass}`}>
          <div className="social-box-icon">
            <img src={socialmedialogo} alt={mediatext + "img"} />
          </div>
          <div className="social-box-text">
            <p>{mediatext}</p>
          </div>
        </div>
      </a>
  );
};

export default SocialContactCard;
