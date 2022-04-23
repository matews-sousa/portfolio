import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { BsArrowRight } from "react-icons/bs";
import { IProject } from "../types/project";
import Link from "next/link";

interface Props {
  project: IProject;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <article className="relative overflow-hidden rounded-md bg-neutral-800 shadow-md">
      <div className="z-10 mx-auto h-56 overflow-hidden shadow-md">
        <img src={project.thumbPath} className="h-full w-full object-cover" />
      </div>
      <div className="p-4">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <a
            className="grid h-8 w-8 cursor-pointer place-content-center rounded-full bg-gradient-to-r from-blue-500 to-blue-400 shadow-md hover:scale-105"
            aria-label="Github repository"
          >
            <DiGithubBadge className="h-6 w-6" />
          </a>
        </div>
        <div className="mt-2 mb-8 flex flex-wrap gap-2 text-xs text-blue-400">
          {project.stack?.map((tech) => (
            <p
              className="rounded-md border-[1px] border-blue-400 p-1"
              key={`${tech} ${project.title}`}
            >
              {tech}
            </p>
          ))}
        </div>
        <div className="flex space-x-4">
          <a className="button" href={project.liveUrl} target="_blank">
            Live Demo
          </a>
          <Link href={`/${project.slug}`}>
            <a className="group flex cursor-pointer items-center gap-2 text-sm text-blue-400">
              Read More
              <BsArrowRight className="transition-transform group-hover:translate-x-2" />
            </a>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
