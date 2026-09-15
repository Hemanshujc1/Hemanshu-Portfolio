import React from "react";
import { ExternalLink } from "lucide-react";
import Contactsection from "../../components/Contactsection/Contactsection";
import HeadingPart from "../../components/HeadingPart/HeadingPart";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const projects = [
  {
    title: "VaayuGo - Full Stack Multi-Vendor Marketplace",
    description:
      "Designed and shipped a production-grade full stack multi-vendor marketplace with 3-role RBAC (Admin, Shopkeeper, Customer). Orchestrated backend systems including scheduled financial settlement generation, penalty engine, discount rules, normalised MySQL database schema, and bulk CSV/ZIP upload processing with integrated server-side image optimisation and PDF invoice generation.",
    image: "/VaayuGo.png",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Sequelize",
      "node-cron",
    ],
    links: [
      {
        label: "GitHub",
        icon: "/icons8-github.svg",
        url: "https://github.com/Hemanshujc1/VaayuGo",
      },
    ],
    reverse: true,
  },
  {
    title: "StreetBite Task Portal",
    description:
      "Developed an end-to-end task management platform with 5-stage automated status transitions and real-time admin/employee dashboards, replacing manual email-based workflows. Secured the API layer with parameterised SQL queries, JWT-based RBAC, bcrypt, and isolated Multer upload directories for audit-ready task execution.",
    image: "/StreetBite.png",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Framer Motion",
      "JWT",
    ],
    links: [
      {
        label: "GitHub",
        icon: "/icons8-github.svg",
        url: "https://github.com/Hemanshujc1/Portal",
      },
    ],
    reverse: false,
  },
  
  {
    title: "E-Commerce Platform",
    description:
      "Built a full-stack e-commerce platform with Next.js SSR, 2-tier admin system, multi-variant product catalog, cart, wishlist, checkout, and return/exchange management. Hardened the API with 6-layer security: Helmet, rate limiting, XSS sanitization, HPP prevention, CORS, and JWT token blacklisting on logout.",
    image: "/Ecommerce.png",
    stack: ["Next.js", "Node.js", "Express.js", "MySQL", "Axios"],
    links: [
      {
        label: "GitHub",
        icon: "/icons8-github.svg",
        url: "https://github.com/Hemanshujc1/Ecommerce",
      },
    ],
    reverse: true,
  },
  {
    title: "E-Cell IIIT Trichy Web Platform",
    description:
      "Official web platform for the Entrepreneurship Cell of IIIT Trichy. A premium, high-performance web application designed to manage events, showcase team and alumni, and provide a seamless administrative experience.",
    image: "/Ecell.png",
    stack: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express.js",
    ],
    links: [
      {
        label: "GitHub",
        icon: "/icons8-github.svg",
        url: "https://github.com/Hemanshujc1/Ecell-IIITT",
      },
    ],
    reverse: false,
  },

  {
    title: "Online Bhaithak",
    description:
      "A full‑stack, Web3‑inspired video‑conferencing platform built with Next.js, Node.js, TypeScript & Tailwind CSS. Integrates GetStream.io for real‑time rooms and Clerk for secure user authentication.",
    image: "/onlinebaithak.png",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "GetStream.io", "Clerk"],
    links: [
      {
        label: "Preview",
        icon: <ExternalLink />,
        url: "https://online-baithak.vercel.app",
      },
      {
        label: "GitHub",
        icon: "/icons8-github.svg",
        url: "https://github.com/Hemanshujc1/Online-Baithak",
      },
    ],
    reverse: true,
  },
  {
    title: "Hemanshu Portfolio",
    description:
      "A fully responsive developer portfolio built with React, Vite, Node.js & Tailwind CSS. Showcases my work, skills, and contact form in a modern, dark-themed UI.",
    image: "/Portfolio.png",
    stack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    links: [
      {
        label: "Preview",
        icon: <ExternalLink />,
        url: "https://hemanshujc-portfolio.vercel.app",
      },
      {
        label: "GitHub",
        icon: "/icons8-github.svg",
        url: "https://github.com/Hemanshujc1/Hemanshu-Portfolio",
      },
    ],
    reverse: false,
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col gap-12 mt-10">
      <HeadingPart text="My Projects" />
      <section>
        <div className="works flex flex-col px-8 md:px-12">
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
          ))}
        </div>
      </section>
      <Contactsection />
    </div>
  );
};

export default Projects;
