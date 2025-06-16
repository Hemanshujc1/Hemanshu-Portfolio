import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Contactsection from "../../components/Contactsection/Contactsection";
import HeadingPart from "../../components/HeadingPart/HeadingPart";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const projects = [
  {
    title: "Online Bhaithak",
    description:
      "A full‑stack, Web3‑inspired video‑conferencing platform (like Zoom) built with Next.js, Node.js, TypeScript & Tailwind CSS. Integrates GetStream.io for real‑time rooms and Clerk for secure user authentication.",
    image: "/onlinebaithak.png",
    links: [
      {
        label: "Preview",
        icon: <ArrowRight />,
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
    title: "Personal Portfolio",
    description:
      "A fully responsive developer portfolio built with React, Vite, Node.js & Tailwind CSS. Showcases my work, skills, and contact form (powered by Web3Forms) in a modern, dark-themed UI.",
    image: "/Portfolio.png",
    links: [
      {
        label: "Preview",
        icon: <ArrowLeft />,
        url: "https://hemanshu-portfolio-six.vercel.app",
      },
      {
        label: "GitHub",
        icon: "/icons8-github.svg",
        url: "https://github.com/Hemanshujc1/Hemanshu-Portfolio",
      },
    ],
    reverse: false,
  },
  {
    title: "Your Global Tax Buddy",
    description:
      "A Next.js website for a fintech startup, built from scratch to boost their online visibility. Features a dynamic Web3Forms contact form for seamless lead capture and a clean, mobile‑friendly design.",
    image: "/yourgtb.png",
    links: [
      {
        label: "Preview",
        icon: <ArrowRight />,
        url: "https://www.yourglobaltaxbuddy.in",
      },
      {
        label: "GitHub",
        icon: "/icons8-github.svg",
        url: "https://github.com/Hemanshujc1/Your-Global-Tax-Buddy",
      },
    ],
    reverse: true,
  },
];

const Work = () => {
  return (
    <div className="flex flex-col gap-12 mt-10">
      <HeadingPart text="My Work" />
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

export default Work;
