import React from "react";
import { IProject } from "../types/project";
import ProjectCard from "./ProjectCard";
import SectionContainer from "./SectionContainer";

interface Props {
  projects: IProject[];
}

const Projects = ({ projects }: Props) => {
  return (
    <SectionContainer id="projects">
      <div className="mb-6 flex items-center gap-2">
        <h2 className="text-3xl font-semibold">projects</h2>
        <div className="h-1 w-full bg-blue-500"></div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Projects;
