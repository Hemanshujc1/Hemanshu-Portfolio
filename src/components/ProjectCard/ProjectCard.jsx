import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ title, description, image, links, reverse }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate image
      gsap.from(imageRef.current, {
        x: reverse ? 100 : -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Animate text
      gsap.from(textRef.current, {
        x: reverse ? -100 : 100,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, [reverse]);

  return (
    <div
      ref={cardRef}
      className={`work-card flex flex-col lg:flex-row gap-12 py-20 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div
        ref={imageRef}
        className="w-full lg:w-[45vw] h-auto rounded-xl shadow-[0_0_10px_10px_rgba(130,69,236,0.3)]"
      >
        <img src={image} alt={`${title} Screenshot`} className="rounded-xl w-full" />
      </div>

      <div
        ref={textRef}
        className="flex flex-col w-full lg:w-[40vw] gap-8 text-center justify-center items-center"
      >
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
              
              {typeof link.icon === "string" ? (
                <img src={link.icon} alt="" className="w-7 h-7" />
              ) : (
                link.icon
              )}
              {link.label} 
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
