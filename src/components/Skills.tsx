import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="">
      <h2 className="mb-6 text-3xl font-bold text-gray-800 dark:text-white">
        Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map(({ name, icon }) => (
          <div
            key={name}
            className="flex h-32 w-32 flex-col items-center justify-center gap-2 rounded-full p-2 shadow-md ring-1 ring-neutral-200 hover:-translate-y-1 dark:bg-neutral-700 dark:ring-0"
          >
            <img src={`/img/logos/${icon}`} className="w-1/2" />
            <h3 className="font-semibold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

const skills = [
  {
    name: "HTML",
    icon: "html.png",
  },
  {
    name: "CSS",
    icon: "css.png",
  },
  {
    name: "JavaScript",
    icon: "javascript.png",
  },
  {
    name: "TypeScript",
    icon: "typescript.png",
  },
  {
    name: "React",
    icon: "react.png",
  },
  {
    name: "Next",
    icon: "next.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwind.png",
  },
  {
    name: "PostgreSQL",
    icon: "postgresql.png",
  },
  {
    name: "Prisma",
    icon: "prisma.png",
  },
  {
    name: "Git",
    icon: "git.png",
  },
];
