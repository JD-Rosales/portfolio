import Avails from "~/assets/img/Avails.jpg";
import BeBalance from "~/assets/img/BeBalance.png";
import BeBalance2 from "~/assets/img/BeBalance2.png";
import BeBalance3 from "~/assets/img/BeBalance3.png";
import Ovp from "~/assets/img/Ovp.png";
import Ovp2 from "~/assets/img/Ovp2.png";
import Ovp3 from "~/assets/img/Ovp3.png";
import Sscti from "~/assets/img/sscti.png";
import Sscti2 from "~/assets/img/sscti2.png";
import Sscti3 from "~/assets/img/sscti3.png";

type ProjectsType = {
  association?: string;
  description?: string;
  gitHub?: string;
  image: string[];
  link?: string;
  name: string;
  tech?: string[];
};

const ProjectsData: ProjectsType[] = [
  {
    association: "Telmo Solutions",
    description:
      "Official Webiste for the Office of the Vice President providing public access to initiatives, news, and services of the Vice President.",
    image: [Ovp, Ovp2, Ovp3],
    link: "https://www.ovp.gov.ph/",
    name: "Office of the Vice President Official Website",
  },
  {
    association: "Telmo Solutions",
    description:
      "Gig platform connecting job seekers with employers based on skillsets and availability.",
    image: [Avails],
    link: "https://miigigs.com/",
    name: "Avails",
    tech: ["PHP", "Laravel", "JavaScript", "Bootstrap", "CSS"],
  },
  {
    association: "SSCTI",
    description:
      "Responsive site offering institutional information, academic programs, admissions, and optimized for SEO.",
    image: [Sscti, Sscti2, Sscti3],
    link: "https://www.ssctacloban.edu.ph/",
    name: "St. Scholasticas College Official Website",
    tech: ["NextJS", "React", "TypeScript", "MongoDB", "Tailwind CSS"],
  },
  {
    association: "Binary Studio Academy",
    description:
      "Track your work-life balance and improve the specific areas of your life with AI recommendations.",
    gitHub: "https://github.com/BinaryStudioAcademy/bsa-2024-bebalance",
    image: [BeBalance, BeBalance2, BeBalance3],
    link: "http://bebalance.eu-central-1.elasticbeanstalk.com/quiz",
    name: "BeBalance",
    tech: [
      "NodeJS",
      "JavaScript",
      "TypeScript",
      "React",
      "PostgreSQL",
      "Redux",
      "OpenAI",
    ],
  },
] as const;

export { ProjectsData, type ProjectsType };
