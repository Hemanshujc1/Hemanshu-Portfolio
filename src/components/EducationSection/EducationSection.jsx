import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import HeadingPart from "../HeadingPart/HeadingPart";
const Educationdata = [
  {
    logo: "/IIITT Logo.png",
    alt: "IIIT-T logo",
    company: "Indian Institute of Information Technology Tiruchirappalli",
    duration: "2022–2026",
    department: "B.Tech. in Electronics & Communication",
    result: "CGPA: 8.54",
    descriptionPoints: [
      "Studied subjects like Semiconductors Devices, VLSI, FPGA, Electronic Circuits & Networks.",
      "Covered Communication Systems like Signals & Systems, RF & Microwave Engineering, and Antenna Theory.",
      "Completed courses in Coding, Deep Learning, Cloud Computing, and Full Stack Development.",
      "Involved in clubs, societies, and voluntary activities.",
    ],
  },
  {
    logo: "/rmc-logo.png",
    alt: "RMC logo",
    company: "Reena Mehta College",
    duration: "2020–2021",
    department: "Class 12th (Science Stream)",
    result: "Percentage: 88.17%",
    descriptionPoints: [
      "Studied Physics, Chemistry, and Mathematics with focus on basic electronics.",
      "Prepared for competitive exams including JEE.",
      "Participated in science exhibitions and academic clubs.",
    ],
  },
  {
    logo: "/narayana-logo.png",
    alt: "Narayana logo",
    company: "Narayana E-techno School",
    duration: "2018–2019",
    department: "Class 10th",
    result: "Percentage: 93.6%",
    descriptionPoints: [
      "Strong foundation in Mathematics and Science.",
      "Actively participated in Olympiads and quiz competitions.",
      "Served as class representative and participated in cultural events.",
    ],
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
