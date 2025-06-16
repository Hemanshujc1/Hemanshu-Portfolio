import React from 'react'
import Tilt from 'react-parallax-tilt';
const ProjectCard = ({ title, description, image, links, reverse }) => {
  return (
    <div
      className={`work-card flex flex-col lg:flex-row gap-12 py-20 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
       <Tilt
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        perspective={1200}
        scale={1.05}
        transitionSpeed={1000}
        gyroscope={true}
      >
      <div className="w-full lg:w-[45vw] h-auto rounded-xl shadow-[0_0_10px_10px_rgba(130,69,236,0.3)]">
        <img src={image} alt={`${title} Screenshot`} className="rounded-xl w-full" />
      </div>
      </Tilt>
      <div className="flex flex-col w-full lg:w-[40vw] gap-8 text-center justify-center items-center">
        <div className="px-4 py-2 rounded-xl max-w-fit bg-ambient shadow-ambient">
          <h1>{title}</h1>
        </div>
        <p className="px-4">{description}</p>

        <div className="flex flex-wrap gap-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="workbutton flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 text-white text-sm font-medium shadow-[0_0_10px_10px_rgba(130,69,236,0.4)] hover:shadow-[0_20px_30px_rgba(130,69,236,0.6)] transition duration-300 ease-in-out"
            >
              {link.label}
              {typeof link.icon === "string" ? (
                <img src={link.icon} alt="" className="w-7 h-7" />
              ) : (
                link.icon
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
