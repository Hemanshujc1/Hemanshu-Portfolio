import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import HeadingPart from "../HeadingPart/HeadingPart";
const Educationdata = [
  {
    logo: "/IIITT Logo.png",
    alt: "IIIT-T logo",
    company: "IIIT Tiruchirappalli",
    duration: "2022–2026",
    department: "B.Tech. in ECE",
    result: "CGPA: 8.54",
    descriptionPoints: [
      "Pursuing core subjects like Digital Electronics, Signal Processing, and Embedded Systems, with additional focus on web development and DSA.",
      "Participated in multiple tech clubs and student bodies, balancing academics with leadership roles and real-world projects.",
    ],
    companylink:"https://iiitt.ac.in/"
  },
  {
    logo: "/rmc-logo.png",
    alt: "RMC logo",
    company: "Reena Mehta College",
    duration: "2020–2021",
    department: "Class 12th (Science Stream)",
    result: "Percentage: 88.17%",
    descriptionPoints: [
      "Studied core science subjects with a focus on Physics, Chemistry, and Mathematics.",
      "Prepared for competitive exams including JEE.",
    ],
    companylink:"https://rmc.edu.in/",
    
  },
  {
    logo: "/narayana-logo.png",
    alt: "Narayana logo",
    company: "Narayana E-techno School",
    duration: "2018–2019",
    department: "Class 10th",
    result: "Percentage: 93.6%",
    descriptionPoints: [
      "Consistently performed at the top of the class and maintained academic excellence across all subjects.",
      "Actively participated in Olympiads and quiz competitions.",
    ],
    companylink:"https://www.narayanaschools.in/",
    
  },
];

const EducationSection = () => {
  return (
    <section className="py-6">
      <HeadingPart text="My Education"></HeadingPart>
      <div className="Education-section px-10 py-20 flex flex-col gap-y-32">
        {Educationdata.map((exp, index) => (
          <InfoCard key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
