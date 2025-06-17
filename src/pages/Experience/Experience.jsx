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
      "Built a responsive website using Next.js, Tailwind CSS, to deliver a sleek and accessible UI across devices.",
      "Integrated Web3Forms for seamless lead generation and user contact handling.",
      "Delivered the full frontend architecture, optimizing performance and SEO for a fintech startup."
    ],
    companylink:"https://www.yourglobaltaxbuddy.in"
  },
  {
    logo: "/IIITT Logo.png",
    company: "Tnp-Cell, IIIT Trichy",
    duration: "2024–2026",
    department: "Coordinator",
    result: "",
    descriptionPoints: [
      "Collaborated with placement officers and company representatives to facilitate campus recruitment activities.",
      "Coordinated student engagement and managed logistics for pre-placement talks, internships, and interviews."
    ],
     companylink:"https://iiitt.ac.in/"
    
  },
  {
    logo: "/ecell_iiitt_logo.jpeg",
    company: "E-cell, IIIT Trichy",
    duration: "2023–2026",
    department: "Overall Coordinator",
    result: "",
    descriptionPoints: [
      "Led the Entrepreneurship Cell in organizing workshops, speaker sessions, and startup networking events.",
      "Managed a team of coordinators to execute E-Cell initiatives and elevate campus startup culture."
    ],
     companylink:"https://iiitt.ac.in/",
  },
  
  {
    logo: "/ecell_iitb_logo.png",
    company: "E-cell, IIT Bombay",
    duration: "2023–2024",
    department: "Campus Executive",
    result: "",
    descriptionPoints: [
      "Promoted IIT Bombay’s E-Cell events and Ideation competitions across campus.",
      "Acted as a liaison between the central E-Cell team and student participants to ensure smooth execution."
    ],
    companylink:"https://www.ecell.in",
  },
  {
    logo: "/IIITT Logo.png",
    company: "Fests, IIIT Trichy",
    duration: " ",
    department: "Volunteer",
    result: "",
    descriptionPoints: [
      "Contributed to organizing cultural and technical events by managing event logistics and coordination.",
      "Assisted in crowd handling, registrations, and event execution during institute fests."
    ],
     companylink:"https://iiitt.ac.in/",
  },
  {
    logo: "/IIITT Logo.png",
    company: "Mess Committee, IIIT Trichy",
    duration: "2023–2024",
    department: "Member",
    result: "",
    descriptionPoints: [
      "Represented student feedback to improve food quality and hygiene in the mess facilities.",
      "Collaborated with administration and vendors to implement menu changes and monitor services."
    ],
     companylink:"https://iiitt.ac.in/",
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
