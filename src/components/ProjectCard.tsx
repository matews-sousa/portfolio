import React from "react";
import { HiOutlineArrowRight, HiOutlineExternalLink } from "react-icons/hi";
import { GoRepo } from "react-icons/go";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <article className="overflow-hidden rounded-md shadow-lg dark:bg-neutral-800">
      <img src={project.thumbPath} className="" />
      <div className="mt-2 p-6">
        <a
          href={project.repositoryUrl}
          className="group flex items-center gap-2 text-2xl font-semibold hover:underline"
        >
          <GoRepo className="transition-all group-hover:-translate-y-[1px]" />
          <span>{project.title}</span>
        </a>
        <p className="my-2 text-gray-700 dark:text-neutral-300">
          {project.excerpt}
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              className="rounded-md bg-gray-200 px-2 py-1 text-sm font-medium text-gray-700 dark:bg-neutral-700 dark:text-neutral-300"
              key={tech}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            className="flex items-center gap-2 rounded-md bg-blue-500 px-3 py-2 font-semibold text-white transition-all hover:-translate-y-[1px] hover:bg-blue-600"
          >
            <span>Live Demo</span>
            <HiOutlineExternalLink className="h-5 w-5" />
          </a>
          <a
            href={project.slug}
            className="group flex items-center gap-2 font-medium hover:underline"
          >
            <span className="">Read More</span>
            <HiOutlineArrowRight className="h-4 w-4 transition-all group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
