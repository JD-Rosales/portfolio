import bootstrap from "~/assets/img/bootstrap.svg";
import css from "~/assets/img/css-3.svg";
import express from "~/assets/img/express.svg";
import git from "~/assets/img/git.svg";
import html from "~/assets/img/html-5.svg";
import javascript from "~/assets/img/javascript.svg";
import material_ui from "~/assets/img/material-ui.svg";
import mongodb from "~/assets/img/mongodb.svg";
import mysql from "~/assets/img/mysql.svg";
import node_js from "~/assets/img/node-js.svg";
import postgresql from "~/assets/img/postgresql.svg";
import react_js from "~/assets/img/react-js.svg";
import tailwind from "~/assets/img/tailwind.svg";
import typescript from "~/assets/img/typescript.svg";

type TechStackType = {
  name: string;
  icon: string;
};

const TechStack: TechStackType[] = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Material UI",
    icon: material_ui,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: react_js,
  },
  {
    name: "Node JS",
    icon: node_js,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "GIT",
    icon: git,
  },
];

export { TechStack };
