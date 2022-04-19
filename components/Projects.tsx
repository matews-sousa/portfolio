import React from "react";
import { IProject } from "../types/project";
import ProjectCard from "./ProjectCard";

interface Props {
  projects: IProject[];
}

const Projects = ({ projects }: Props) => {
  return (
    <section id="projects">
      <h2 className="mb-12 text-center text-2xl font-semibold">Projects</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
