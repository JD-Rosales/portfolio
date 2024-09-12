import React from "react";
import { IconBaseProps } from "react-icons";
import { CgWorkAlt } from "react-icons/cg";

type ExperienceType = {
  title: string;
  company: string;
  location: string;
  description: string[];
  icon: React.FunctionComponentElement<IconBaseProps>;
  date: string;
};

const ExperienceData: ExperienceType[] = [
  {
    title: "Computer Programmer",
    company: "St. Scholastica's College Tacloban Inc.",
    location: "Tacloban, City",
    description: [
      `Develop and maintain the institutional website, optimizing it for search engines (SEO) to enhance online visibility and user engagement.`,
      `Setup and manage edu email system for the institution,
improving communication infrastructure.`,
      `Troubleshoot and resolve technical issues and assist
teachers and students.`,
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2024 - July 2024",
  },
  {
    title: "Front-End Developer",
    company: "Telmo Solutions",
    location: "Tacloban, City",
    description: [
      `Collaborated closely with design teams and senior developers to deliver software solutions tailored to client needs, ensuring high standards of functionality and user experience.`,
      `Transformed Figma designs into fully responsive, pixel-perfect user interfaces, optimizing performance and cross-browser compatibility while incorporating interactive elements to enhance user engagement.`,
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
] as const;

export { ExperienceData };
