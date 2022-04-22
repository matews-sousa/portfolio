import React from "react";
import { IProject } from "../types/project";
import ProjectCard from "./ProjectCard";
import SectionContainer from "./SectionContainer";

interface Props {
  projects: IProject[];
}

const Projects = ({ projects }: Props) => {
  return (
    <SectionContainer id="projects" title="projects">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Projects;
