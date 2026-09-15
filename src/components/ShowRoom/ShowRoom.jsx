import React, { useState } from "react";
import Button from "../Button/Button";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import "./ShowRoom.css";

const slides = [
  {
    title: "VaayuGo - Full Stack Multi-Vendor Marketplace",
    description:
      "A high-performance multi-vendor marketplace platform featuring 3-tier Role-Based Access Control (Admin, Vendor, Customer), automated vendor payout schedules, discount rule engine, and real-time inventory management. Built for ultra-fast load times and seamless checkout conversions.",
    image: "/VaayuGo.png",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Sequelize",
      "Tailwind CSS",
    ],
    link: "https://github.com/Hemanshujc1/VaayuGo",
  },
  {
    title: "StreetBite Task Portal",
    description:
      "End-to-end task management platform with 5-stage automated status transitions and real-time admin/employee dashboards, replacing manual email-based workflows. Secured the API layer with parameterised SQL queries, JWT-based RBAC, bcrypt, and isolated Multer upload directories.",
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
    title: "Online Bhaithak",
    description:
      "A full-stack, Web3-inspired video-conferencing platform built with Next.js, Node.js, TypeScript & Tailwind CSS. Integrates GetStream.io for real-time rooms and Clerk for secure user authentication.",
    image: "/onlinebaithak.png",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GetStream.io",
      "Clerk",
    ],
    link: "https://github.com/Hemanshujc1/Online-Baithak",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce platform with Next.js SSR, 2-tier admin system, multi-variant product catalog, cart, wishlist, checkout, and return/exchange management. Hardened the API with 6-layer security: Helmet, rate limiting, XSS sanitization, HPP prevention, CORS, and JWT token blacklisting.",
    image: "/Ecommerce.png",
    tech: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Axios",
    ],
    link: "https://github.com/Hemanshujc1/Ecommerce",
  },
  {
    title: "Your Global Tax Buddy - FinTech Platform",
    description:
      "A bespoke, high-converting digital platform developed for a leading cross-border tax consultancy. Engineered with Next.js, accessible UI, structured lead capture funnels, and optimized Core Web Vitals resulting in a 45% increase in client inquiries.",
    image: "/yourgtb.png",
    tech: ["Next.js", "Tailwind CSS", "Web3Forms", "SEO Engine", "Responsive Design"],
    link: "https://github.com/Hemanshujc1",
  },
  {
    title: "E-Cell IIIT Trichy Web Platform",
    description:
      "Official web platform for the Entrepreneurship Cell of IIIT Trichy. A premium, high-performance web application designed to manage events, showcase team and alumni, and provide a seamless administrative experience.",
    image: "/Ecell.png",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Node.js", "Express.js"],
    link: "https://github.com/Hemanshujc1/Ecell-IIITT",
  },
];

const ShowRoom = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <section className="px-6 sm:px-12 py-20 bg-primary">
      <div className="text-center mb-12">
        <span className="text-accent font-mono text-xs sm:text-sm tracking-widest uppercase mb-2 block">
          Featured Work
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-lightest-slate">
          Selected Projects
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-accent to-blue-500 mx-auto mt-4 rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto my-8">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-lightest-slate/15 bg-secondary group">
          <div className="flex flex-col md:flex-row min-h-[420px] md:min-h-[480px]">
            {/* Image Part */}
            <div className="w-full md:w-3/5 h-[340px] md:h-auto relative overflow-hidden bg-primary/30 flex items-center justify-center group-hover:bg-primary/40 transition-colors">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all duration-500 z-10" />

              {/* Preload all images so they are ready when the user clicks next */}
              <div style={{ display: "none" }}>
                {slides.map((slide, idx) => (
                  <img
                    key={idx}
                    src={slide.image}
                    alt="preload"
                    fetchpriority={idx === 0 ? "high" : "low"}
                  />
                ))}
              </div>

              <img
                key={current}
                src={slides[current].image}
                alt={slides[current].title}
                fetchpriority="high"
                className="w-full h-full object-contain p-6 transform transition-transform duration-700 group-hover:scale-105 relative z-0"
              />

              {/* Mobile Controls */}
              <div className="absolute inset-0 flex md:hidden items-center justify-between px-3 z-20 pointer-events-none">
                <button
                  onClick={prevSlide}
                  className="pointer-events-auto p-2.5 rounded-full bg-secondary/90 text-lightest-slate hover:text-accent border border-lightest-slate/15 shadow-xl"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  onClick={nextSlide}
                  className="pointer-events-auto p-2.5 rounded-full bg-secondary/90 text-lightest-slate hover:text-accent border border-lightest-slate/15 shadow-xl"
                  aria-label="Next Slide"
                >
                  <ChevronRight size={22} />
                </button>
              </div>
            </div>

            {/* Content Part */}
            <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-secondary relative z-20 border-t md:border-t-0 md:border-l border-lightest-slate/10">
              <span className="text-xs font-mono text-accent uppercase tracking-wider mb-2">
                Project 0{current + 1} / 0{slides.length}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-lightest-slate mb-4 group-hover:text-accent transition-colors leading-snug">
                {slides[current].title}
              </h3>
              <p className="text-slate text-sm sm:text-base leading-relaxed mb-6">
                {slides[current].description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {slides[current].tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3.5 py-1.5 bg-primary/60 text-accent text-xs font-mono rounded-lg border border-accent/20 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-4 border-t border-lightest-slate/10 flex items-center justify-between">
                <a
                  href={slides[current].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-lightest-slate hover:text-accent transition-colors"
                >
                  GitHub Repository <ExternalLink size={16} />
                </a>

                <div className="flex gap-2">
                  <button
                    onClick={prevSlide}
                    className="p-2 rounded-lg bg-primary text-lightest-slate hover:text-accent border border-lightest-slate/10 hover:border-accent/40 transition-all shadow-md"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-2 rounded-lg bg-primary text-lightest-slate hover:text-accent border border-lightest-slate/10 hover:border-accent/40 transition-all shadow-md"
                    aria-label="Next Slide"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Floating Arrows */}
          <button
            onClick={prevSlide}
            className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-primary/90 text-lightest-slate hover:text-accent hover:bg-primary border border-lightest-slate/15 transition-all shadow-2xl backdrop-blur-sm"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-primary/90 text-lightest-slate hover:text-accent hover:bg-primary border border-lightest-slate/15 transition-all shadow-2xl backdrop-blur-sm"
            aria-label="Next Slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 justify-center items-center py-6">
        <Button
          text="View All Projects"
          link="/Projects"
          className="!px-7 !py-3.5 !text-base !rounded-lg !border-accent !text-accent hover:!bg-accent/10"
        />
        <Button
          text="View Packages"
          link="/Packages"
          className="!px-7 !py-3.5 !text-base !rounded-lg !border-accent !text-accent hover:!bg-accent/10"
        />
      </div>
    </section>
  );
};

export default ShowRoom;
