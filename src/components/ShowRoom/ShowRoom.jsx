import React, { useState } from "react";
import Button from "../Button/Button";
import "./ShowRoom.css";

const slides = [
  {
    title: "Online Baithak",
    description:
      "Engineered a full‑stack video‑conferencing platform modeled on Google Meet/Zoom, using Next.js, Node.js, TypeScript, and Tailwind CSS. Integrated GetStream.io for real‑time meeting rooms and Clerk for secure user authentication.",
    image: "/onlinebaithak.png",
    tech: ["TypeScript", "Clerk", "GetStream.io"],
    link: "https://online-baithak.vercel.app",
  },
  {
    title: "Your Global Tax Buddy",
    description:
      "Developed a fully responsive Next.js website for a tax‑outsourcing startup. Implemented end‑to‑end features—from sleek UI layouts to a dynamic Web3Forms contact form.",
    image: "/yourgtb.png",
    tech: ["Next.js", "JavaScript", "Web3Forms"],
    link: "https://www.yourglobaltaxbuddy.in/",
  },
  {
    title: "Hemanshu Portfolio",
    description:
      "A modern portfolio built with React, Vite, Node.js, and Tailwind CSS. Showcases my projects, skills, and contact info—complete with a dynamic contact form.",
    image: "/Portfolio.png",
    tech: ["React", "Node.js", "Tailwind CSS"],
    link: "https://hemanshujc-portfolio.vercel.app",
  },
];

const ShowRoom = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <section className="px-6 sm:px-10 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Work</h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-2" />
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-semibold">
          Showcasing my journey as a developer, all built with love.
        </p>
      </div>

      <div className="relative flex items-center justify-center bg-black overflow-hidden rounded-xl shadow-[0_0_10px_10px_rgba(130,69,236,0.3)] my-10 p-4">
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm scale-105 opacity-30 rounded-xl"
          style={{ backgroundImage: `url(${slides[current].image})` }}
        />
        <div className="relative z-10 w-full max-w-5xl bg-[#2d2d2d] rounded-xl shadow-lg">
          <div className="flex flex-col items-center justify-center p-1">
            <img
              src={slides[current].image}
              alt={slides[current].title}
              className="w-full rounded-lg mb-4"
            />
            <div className="bg-gray-900 w-full rounded-xl px-4 py-1.5 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2 showroomtitle">
                {slides[current].title}
              </h2>
              <p className="text-sm sm:text-base font-mono text-white mb-4 showroomdes">
                {slides[current].description}
              </p>
              <div className="flex flex-wrap gap-3 justify-center items-center showroomtech mb-4">
                {slides[current].tech.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-full px-3 py-1 bg-white text-black text-xs sm:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Button
                text="Visit"
                link={slides[current].link}
                className="text-[14px] px-4 py-1 rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 z-20 h-10 w-10 sm:h-20 sm:w-20 arrowbutton"
        >
          <img
            src="/leftarrow.svg"
            alt="Previous"
            className="w-full h-full rotate-[-135deg]"
          />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 z-20 h-10 w-10 sm:h-20 sm:w-20 arrowbutton"
        >
          <img
            src="/rightarrow.svg"
            alt="Next"
            className="w-full h-full rotate-[-45deg]"
          />
        </button>
      </div>

      <div className="flex flex-wrap gap-6 justify-center items-center py-8 gotobutton">
        <Button
          text="Work Details"
          link="/Work"
          className="text-lg sm:text-2xl px-4 py-2 rounded-xl"
        />
        <Button
          text="My Experience"
          link="/Experience"
          className="text-lg sm:text-2xl px-4 py-2 rounded-xl"
        />
      </div>
    </section>
  );
};

export default ShowRoom;
