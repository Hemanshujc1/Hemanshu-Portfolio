import React, { useState } from "react";
import Button from "../Button/Button";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import "./ShowRoom.css";

const slides = [
  {
    title: "VaayuGo - Full Stack Multi-Vendor Marketplace",
    description:
      "Designed and shipped a production-grade full stack multi-vendor marketplace with 3-role RBAC (Admin, Shopkeeper, Customer). Orchestrated backend systems including scheduled financial settlement generation, penalty engine, discount rules, normalised MySQL database schema, and bulk CSV/ZIP upload processing with integrated server-side image optimisation and PDF invoice generation.",
    image: "/VaayuGo.png",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Sequelize",
      "node-cron",
    ],
    link: "https://github.com/Hemanshujc1/VaayuGo",
  },
  {
    title: "StreetBite Task Portal",
    description:
      "Developed an end-to-end task management platform with 5-stage automated status transitions and real-time admin/employee dashboards, replacing manual email-based workflows. Secured the API layer with parameterised SQL queries, JWT-based RBAC, bcrypt, and isolated Multer upload directories for audit-ready task execution.",
    image: "/StreetBite.png",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Framer Motion",
      "JWT",
    ],
    link: "https://github.com/Hemanshujc1/Portal",
  },

  {
    title: "E-Commerce Platform",
    description:
      "Built a full-stack e-commerce platform with Next.js SSR, 2-tier admin system, multi-variant product catalog, cart, wishlist, checkout, and return/exchange management. Hardened the API with 6-layer security: Helmet, rate limiting, XSS sanitization, HPP prevention, CORS, and JWT token blacklisting on logout.",
    image: "/Ecommerce.png",
    tech: ["Next.js", "Node.js", "Express.js", "MySQL", "Axios"],
    link: "https://github.com/Hemanshujc1/Ecommerce",
  },
  {
    title: "E-Cell IIIT Trichy Web Platform",
    description:
      "Official web platform for the Entrepreneurship Cell of IIIT Trichy. A premium, high-performance web application designed to manage events, showcase team and alumni, and provide a seamless administrative experience.",
    image: "/Ecell.png",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Node.js", "Express.js"],
    link: "https://github.com/Hemanshujc1/Ecell-IIITT",
  },

  {
    title: "Online Bhaithak",
    description:
      "A full‑stack, Web3‑inspired video‑conferencing platform built with Next.js, Node.js, TypeScript & Tailwind CSS. Integrates GetStream.io for real‑time rooms and Clerk for secure user authentication.",
    image: "/onlinebaithak.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "GetStream.io", "Clerk"],
    link: "https://github.com/Hemanshujc1/Online-Baithak",
  },
  {
    title: "Hemanshu Portfolio",
    description:
      "A fully responsive developer portfolio built with React, Vite, Node.js & Tailwind CSS. Showcases my projects, and skills, in a modern dark-themed UI.",
    image: "/Portfolio.png",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/Hemanshujc1/Hemanshu-Portfolio",
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
          Projects
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
                  GitHub <ExternalLink size={16} />
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
          text="Projects Details"
          link="/Projects"
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
