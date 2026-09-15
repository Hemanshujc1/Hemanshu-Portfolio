import React from "react";
import Contactsection from "../../components/Contactsection/Contactsection";
import HeadingPart from "../../components/HeadingPart/HeadingPart";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { agencyProjects } from "../../data/agencyData";

const Projects = () => {
  return (
    <div className="flex flex-col gap-12 mt-10">
      <HeadingPart text="Our Projects & Work" />

      <section>
        <div className="works flex flex-col px-8 md:px-12">
          {agencyProjects.map((proj, idx) => (
            <ProjectCard
              key={idx}
              title={proj.title}
              description={proj.description}
              image={proj.image}
              stack={proj.stack}
              links={proj.links}
              reverse={idx % 2 === 1}
            />
          ))}
        </div>
      </section>

      <Contactsection />
    </div>
  );
};

export default Projects;
