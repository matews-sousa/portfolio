import Image from "next/image";
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
            <Image
              src={`/img/logos/${icon}`}
              alt={`${name}`}
              aria-hidden="true"
              className="h-10 w-10"
              width={50}
              height={50}
            />
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
    icon: "html.svg",
  },
  {
    name: "CSS",
    icon: "css.svg",
  },
  {
    name: "JavaScript",
    icon: "javascript.svg",
  },
  {
    name: "TypeScript",
    icon: "typescript.svg",
  },
  {
    name: "React",
    icon: "react.svg",
  },
  {
    name: "Next",
    icon: "next.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwind.svg",
  },
  {
    name: "PostgreSQL",
    icon: "postgresql.svg",
  },
  {
    name: "Prisma",
    icon: "prisma.svg",
  },
  {
    name: "Ruby",
    icon: "ruby.svg",
  },
  {
    name: "Ruby on Rails",
    icon: "rails-1.svg",
  },
  {
    name: "Git",
    icon: "git.svg",
  },
];
