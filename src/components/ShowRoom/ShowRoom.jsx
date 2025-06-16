import React, { useState } from "react";
import Button from "../Button/Button";
import "./ShowRoom.css"

const slides = [
  {
    title: "Online Baithak",
    description:
      "Engineered a full‑stack video‑conferencing platform modeled on Google Meet/Zoom, using Next.js, Node.js, TypeScript, and Tailwind CSS. Integrated GetStream.io for real‑time meeting rooms and Clerk for secure user authentication. A hands‑on project that sharpened my skills in real‑time communication and auth flows.",
    image: "/onlinebaithak.png",
    tech: ["TypeScript","Clerk","GetStream.io"],
    link: "https://online-baithak.vercel.app",
  },
  {
    title: "Your Global Tax Buddy",
    description:"Developed a fully responsive Next.js website for a tax‑outsourcing startup, collaborating closely with their team to bring their brand online. Implemented end‑to‑end features—from sleek UI layouts to a dynamic Web3Forms contact form—boosting the company’s digital visibility and lead capture.",    image: "/yourgtb.png",
    tech: ["Next.js","JavaScript","Web3Forms"],
    link: "/",
  },
  {
    title: "Personal Portfolio",
    description: "A modern portfolio built from the ground up with React, Vite, Node.js, JavaScript, and Tailwind CSS. Showcases my projects, skills, and contact info—complete with a dynamic Web3Forms contact form so visitors can reach out instantly.", 
    image: "/Portfolio.png",
    tech: ["React","Node.js", "Tailwind CSS"],
    link: "/",
  },
];

const ShowRoom = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="px-10 py-8">
     
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Work</h2>
          <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
          <p className="text-gray-400 mt-4 text-lg font-semibold">
          Showcasing my journey as a developer, all built with love.
          </p>
        </div>
      <div className="relative w-full h-full flex items-center justify-center bg-black overflow-hidden rounded-xl shadow-[0_0_10px_10px_rgba(130,69,236,0.3)] my-10 p-4">
        {/* Background blurred */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center blur-sm scale-105 opacity-30 rounded-xl"
          style={{ backgroundImage: `url(${slides[current].image})` }}
        />

        {/* Main content */}
        <div className="relative z-10 w-[900px] bg-[#2d2d2d] rounded-xl shadow-lg">
          <div className="flex flex-col items-center justify-center p-4">
            <img
              src={slides[current].image}
              alt="slide"
              className="w-full rounded-lg mb-4"
            />
            <div className="bg-gray-900 text-black w-full rounded-xl p-4 text-center">
              <h2 className="text-2xl font-bold text-purple-600 mb-2 showroomtitle">
                {slides[current].title}
              </h2>
              <p className="text-md font-mono text-white mb-3 showroomdes">
                {slides[current].description}
              </p>
              <div className="flex justify-center gap-4 items-center showroomtech">
                {slides[current].tech.map((tech, index) => (
                  <span
                    key={index}
                    className="border border-black rounded-full px-3 py-1 bg-gray-200 text-sm"
                  >
                    {tech}
                  </span>
                ))}
                <Button text="Visit" link={slides[current].link} />
              </div>
            </div>
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 z-20 text-white text-4xl"
        >
          <div className="h-[100px] w-[100px] -rotate-[135deg] arrowbutton">
            <img src="/leftarrow.svg" alt="leftarrow" />
          </div>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 z-20 text-white text-4xl"
        >
          <div className="h-[100px] w-[100px] -rotate-45 arrowbutton">
            <img src="/rightarrow.svg" alt="rightarrow" />
          </div>
        </button>
      </div>

      <div className="flex text-2xl gap-10 justify-center items-center py-8 gotobutton">
        <Button text="Work Details" link="/Work" />
        <Button text="My Experience" link="/Experience" />
      </div>
    </section>
  );
};
export default ShowRoom;
