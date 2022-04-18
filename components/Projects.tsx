import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="mb-12 text-center text-2xl font-semibold">Projects</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;
