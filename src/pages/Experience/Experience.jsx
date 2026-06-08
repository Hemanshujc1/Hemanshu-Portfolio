import React from "react";
import Contactsection from "../../components/Contactsection/Contactsection";
import InfoCard from "../../components/InfoCard/InfoCard";
import HeadingPart from "../../components/HeadingPart/HeadingPart";

const experienceData = [
  {
    logo: "/vakrangee-logo.png",
    company: "Vakrangee Limited",
    duration: "Dec 2025–Present",
    department: "Software Engineer Intern",
    result: "Full Stack Developer",
    descriptionPoints: [
      "Architected a full-stack Employee Onboarding System using React.js, Node.js, and MySQL with 3-tier Role-Based Access Control (RBAC) — Employee, HR Admin, HR Super Admin — eliminating paper-based onboarding workflows across the organisation.",
      "Engineered secure backend systems: JWT authentication, bcrypt password hashing, Multer document upload/verification pipelines, and automated stage-progression logic reducing manual HR intervention across multi-step compliance workflows.",
      "Spearheaded frontend development of Vakrangee × Jio Payment Bank customer onboarding portal (React.js), integrating third-party REST APIs within a 6-engineer cross-functional team to enable digital bank-account opening for agents nationwide.",
      "Implemented 30+ field-level form validations using Zod and Yup schemas with custom regex patterns and real-time error-handling flows, reducing invalid data submissions and improving production form success rates.",
      "Delivered PDF generation, audit logging, document management, and Git/GitHub feature-branching workflows; collaborated on code reviews and CI integration within an agile development environment.",
    ],
    companylink: "https://vakrangee.in",
  },
  {
    logo: "/yourgtb_logo.png",
    company: "Your Global Tax Buddy",
    duration: "2024–2025",
    department: "Full Stack Developer ",
    result: "Freelancing",
    descriptionPoints: [
      "Built a responsive website using Next.js, Tailwind CSS, to deliver a sleek and accessible UI across devices.",
      "Integrated Web3Forms for seamless lead generation and user contact handling.",
      "Delivered the full frontend architecture, optimizing performance and SEO for a fintech startup.",
    ],
    companylink: "-",
  },
  {
    logo: "/ecell_iiitt_logo.jpeg",
    company: "Entrepreneurship Cell, IIIT Trichy",
    duration: "Jan 2023 – Apr 2026",
    department: "President",
    result: "Leadership",
    descriptionPoints: [
      "Led 10+ workshops and 7 speaker sessions for 300+ participants.",
      "Grew membership and annual engagement by 30% through partnerships with founders and investors.",
    ],
    companylink: "https://iiitt.ac.in/",
  },
  {
    logo: "/IIITT Logo.png",
    company: "Training & Placement Cell, IIIT Trichy",
    duration: "May 2024 – May 2025",
    department: "Overall Coordinator",
    result: "Leadership",
    descriptionPoints: [
      "Coordinated end-to-end campus placements for 100+ students across 15+ companies.",
      "Managed recruiter relations and on-campus drive logistics.",
    ],
    companylink: "http://placement.iiitt.ac.in",
  },

  {
    logo: "/ecell_iitb_logo.png",
    company: "E-cell, IIT Bombay",
    duration: "2023–2024",
    department: "Campus Executive",
    result: "Representative",
    descriptionPoints: [
      "Promoted IIT Bombay’s E-Cell events and Ideation competitions across campus.",
      "Acted as a liaison between the central E-Cell team and student participants to ensure smooth execution.",
    ],
    companylink: "https://www.ecell.in",
  },
  {
    logo: "/IIITT Logo.png",
    company: "Fests, IIIT Trichy",
    duration: "2023",
    department: "Volunteer",
    result: "Volunteering",
    descriptionPoints: [
      "Contributed to organizing cultural and technical events by managing event logistics and coordination.",
      "Assisted in crowd handling, registrations, and event execution during institute fests.",
    ],
    companylink: "https://iiitt.ac.in/",
  },
  {
    logo: "/IIITT Logo.png",
    company: "Mess Committee, IIIT Trichy",
    duration: "2023–2024",
    department: "Member",
    result: "Management",
    descriptionPoints: [
      "Represented student feedback to improve food quality and hygiene in the mess facilities.",
      "Collaborated with administration and vendors to implement menu changes and monitor services.",
    ],
    companylink: "https://iiitt.ac.in/",
  },
];

const Experience = () => {
  return (
    <div className="flex flex-col gap-12 mt-5">
      <section className="py-6">
        <HeadingPart text="My Experience"></HeadingPart>
        <div className="Experience-section px-10 py-20 flex flex-col gap-y-0">
          {experienceData.map((exp, index) => (
            <InfoCard key={index} {...exp} />
          ))}
        </div>
      </section>
      <Contactsection />
    </div>
  );
};

export default Experience;
