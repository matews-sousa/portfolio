import React from "react";
import SectionContainer from "./SectionContainer";
import Skill from "./Skill";

const Skills = () => {
  return (
    <SectionContainer title="skills" id="skills">
      <div className="flex flex-wrap items-center justify-center gap-6">
        {skills.map((skill) => (
          <Skill source={skill.source} name={skill.name} key={skill.name} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Skills;

const skills = [
  {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    name: "HTML5",
  },
  {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    name: "CSS3",
  },
  {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    name: "Javascript",
  },
  {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    name: "Typescript",
  },
  {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    name: "TailwindCSS",
  },
  {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    name: "React.js",
  },
  {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
    name: "Next.js",
  },
  {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    name: "Firebase",
  },
  {
    source: "/img/prisma-3.svg",
    name: "Prisma",
  },
  {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    name: "MySQL",
  },
  {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    name: "Git",
  },
  {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    name: "Figma",
  },
];
