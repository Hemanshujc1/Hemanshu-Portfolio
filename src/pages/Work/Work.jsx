import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Contactsection from "../../components/Contactsection/Contactsection";
import HeadingPart from "../../components/HeadingPart/HeadingPart";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const projects = [
  {
    title: "Online Bhaithak",
    description:
      "A virtual collaboration platform designed for productive online discussions and community meetings.",
    image: "/onlinebaithak.png",
    links: [
      { label: "Preview", icon: <ArrowRight />, url: "https://online-baithak.vercel.app" },
      { label: "GitHub", icon: "/icons8-github.svg", url: "https://github.com/Hemanshujc1/Online-Baithak" }, 
    ],
    reverse: true,
  },
  {
    title: "Personal Portfolio",
    description:
      "A virtual collaboration platform designed for productive online discussions and community meetings.",
    image: "/Portfolio.png",
    links: [
      { label: "Preview", icon: <ArrowLeft />, url: "/" },
      { label: "GitHub", icon: "/icons8-github.svg", url: "/" }, 
    ],
    reverse: false,
  },
  {
    title: "Your Global Tax Buddy",
    description:
      "An intelligent tax companion app designed to assist users across borders with compliance and filings.",
    image: "/yourgtb.png",
    links: [
      { label: "Preview", icon:  <ArrowRight />, url: "https://www.yourglobaltaxbuddy.in" },
      { label: "GitHub",  icon: "/icons8-github.svg", url: "https://github.com/Hemanshujc1/Your-Global-Tax-Buddy" },
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
