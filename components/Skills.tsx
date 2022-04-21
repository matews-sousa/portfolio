import React from "react";
import { DiHtml5, DiCss3, DiReact, DiGit } from "react-icons/di";
import {
  SiNextdotjs,
  SiStyledcomponents,
  SiChakraui,
  SiPrisma,
  SiMysql,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import SectionContainer from "./SectionContainer";

const Skills = () => {
  return (
    <SectionContainer>
      <div className="mb-6 flex items-center gap-2">
        <h2 className="text-3xl font-semibold">skills</h2>
        <div className="h-1 w-full bg-blue-500"></div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-12">
        {skills.map((skill) => (
          <div className="flex flex-col items-center" key={skill.name}>
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Skills;

const skills = [
  {
    icon: <DiHtml5 className="tech-icon" />,
    name: "HTML5",
  },
  {
    icon: <DiCss3 className="tech-icon" />,
    name: "CSS3",
  },
  {
    icon: <IoLogoJavascript className="tech-icon" />,
    name: "Javascript",
  },
  {
    icon: <DiReact className="tech-icon" />,
    name: "React.js",
  },
  {
    icon: <SiNextdotjs className="tech-icon h-24 w-24" />,
    name: "Next.js",
  },
  {
    icon: <SiStyledcomponents className="tech-icon" />,
    name: "styled-components",
  },
  {
    icon: <SiChakraui className="tech-icon" />,
    name: "ChakraUI",
  },
  {
    icon: <SiPrisma className="tech-icon" />,
    name: "Prisma",
  },
  {
    icon: <SiMysql className="tech-icon" />,
    name: "MySQL",
  },
  {
    icon: <DiGit className="tech-icon" />,
    name: "Git",
  },
];
