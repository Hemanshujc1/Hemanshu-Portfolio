import React, { useState } from "react";
import Button from "../Button/Button";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
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
    <section className="px-6 sm:px-10 py-16 bg-primary">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-lightest-slate tracking-widest">
          WORK
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-accent to-blue-500 mx-auto mt-4 rounded-full" />
        <p className="text-slate mt-6 text-base sm:text-lg font-light max-w-2xl mx-auto">
          Showcasing my journey as a developer, all built with passion and
          precision.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto my-10">
        <div className="relative overflow-hidden rounded-xl shadow-2xl border border-lightest-slate/10 bg-secondary group">
          <div className="flex flex-col md:flex-row">
            {/* Image Part */}
            <div className="w-full md:w-3/5 h-[300px] md:h-auto relative overflow-hidden bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all duration-500 z-10" />
              <img
                src={slides[current].image}
                alt={slides[current].title}
                className="w-full h-full object-contain p-4 transform transition-transform duration-700 group-hover:scale-105 relative z-0"
              />

              {/* Mobile Controls - Overlay on Image */}
              <div className="absolute inset-0 flex md:hidden items-center justify-between px-2 z-20 pointer-events-none">
                <button
                  onClick={prevSlide}
                  className="pointer-events-auto p-2 rounded-full bg-secondary/80 text-lightest-slate hover:text-accent border border-lightest-slate/10 backdrop-blur-sm shadow-lg active:scale-95 transition-all"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="pointer-events-auto p-2 rounded-full bg-secondary/80 text-lightest-slate hover:text-accent border border-lightest-slate/10 backdrop-blur-sm shadow-lg active:scale-95 transition-all"
                  aria-label="Next Slide"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Content Part */}
            <div className="w-full md:w-2/5 p-8 flex flex-col justify-center bg-secondary relative z-20 border-l border-lightest-slate/5">
              <h3 className="text-2xl font-bold text-lightest-slate mb-4 group-hover:text-accent transition-colors">
                {slides[current].title}
              </h3>
              <p className="text-slate text-sm leading-relaxed mb-6">
                {slides[current].description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {slides[current].tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/50 text-accent text-xs font-mono rounded-full border border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto">
                <a
                  href={slides[current].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-lightest-slate hover:text-accent transition-colors pb-1 border-b border-transparent hover:border-accent"
                >
                  Visit Project <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Controls - Desktop */}
          <button
            onClick={prevSlide}
            className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-primary/80 text-lightest-slate hover:text-accent hover:bg-primary border border-lightest-slate/10 transition-all shadow-lg backdrop-blur-sm"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-primary/80 text-lightest-slate hover:text-accent hover:bg-primary border border-lightest-slate/10 transition-all shadow-lg backdrop-blur-sm"
            aria-label="Next Slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 justify-center items-center py-8">
        <Button
          text="Work Details"
          link="/Work"
          className="!px-6 !py-3 !text-base !rounded-md !border-accent !text-accent hover:!bg-accent/10"
        />
        <Button
          text="My Experience"
          link="/Experience"
          className="!px-6 !py-3 !text-base !rounded-md !border-accent !text-accent hover:!bg-accent/10"
        />
      </div>
    </section>
  );
};

export default ShowRoom;
