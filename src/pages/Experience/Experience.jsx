import React from "react";
import Contactsection from "../../components/Contactsection/Contactsection";
import InfoCard from "../../components/InfoCard/InfoCard";
import HeadingPart from "../../components/HeadingPart/HeadingPart";

const experienceData = [
  {
    logo: "/yourgtb_logo.png",
    company: "Your Global Tax Buddy",
    duration: "2024–2025",
    department: "Lead Web-Developer",
    result: "Freelancing",
    descriptionPoints: [
      "Led development of responsive websites and dashboards.",
      "Integrated APIs and implemented SEO best practices.",
      "Managed deployment and version control with GitHub.",
    ],
  },
  {
    logo: "/IIITT Logo.png",
    company: "Tnp-Cell, IIIT Trichy",
    duration: "2024–2026",
    department: "Coordinator",
    result: "",
    descriptionPoints: [
      "Coordinated placement drives and company onboarding.",
      "Worked on resume verification and analytics tools.",
    ],
  },
  {
    logo: "/ecell_iiitt_logo.jpeg",
    company: "E-cell, IIIT Trichy",
    duration: "2023–2026",
    department: "Overall Coordinator",
    result: "",
    descriptionPoints: [
      "Organized entrepreneurial events and workshops.",
      "Collaborated with IITs and startups for mentorship programs.",
    ],
  },
  
  {
    logo: "/ecell_iitb_logo.png",
    company: "E-cell, IIT Bombay",
    duration: "2023–2024",
    department: "Campus Executive",
    result: "",
    descriptionPoints: [
      "Acted as the bridge between E-cell and IIITT.",
      "Promoted and organized E-Summit participation.",
    ],
  },
  {
    logo: "/IIITT Logo.png",
    company: "Fests, IIIT Trichy",
    duration: "2023–2024",
    department: "Volunteer",
    result: "",
    descriptionPoints: [
      "Managed event logistics and promotions.",
      "Volunteered for registrations and crowd control.",
    ],
  },
  {
    logo: "/IIITT Logo.png",
    company: "Mess Committee, IIIT Trichy",
    duration: "2023–2024",
    department: "Member",
    result: "",
    descriptionPoints: [
      "Oversaw menu planning and hygiene checks.",
      "Collected feedback and ensured implementation.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="flex flex-col gap-12 mt-5">
      <section className="py-6">
        <HeadingPart text="My Experience"></HeadingPart>
        <div className="Experience-section px-10 py-20 flex flex-col gap-y-32">
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
