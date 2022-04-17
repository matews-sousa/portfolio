import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { BsArrowRight } from "react-icons/bs";

const ProjectCard = () => {
  return (
    <article className="relative rounded-md bg-neutral-800 p-6 shadow-md">
      <div className="z-10 mx-auto h-56 overflow-hidden rounded-md shadow-md">
        <img
          src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <h3 className="text-xl font-semibold">Instagram Clone</h3>
        <a
          className="grid h-8 w-8 cursor-pointer place-content-center rounded-full bg-gradient-to-r from-blue-500 to-blue-400 shadow-md hover:scale-105"
          aria-label="Github repository"
        >
          <DiGithubBadge className="h-6 w-6" />
        </a>
      </div>
      <div className="mt-2 mb-4 flex gap-2 text-xs text-blue-400">
        <p className="rounded-md border-[1px] border-blue-400 p-1">Next.js</p>
        <p className="rounded-md border-[1px] border-blue-400 p-1">Firebase</p>
        <p className="rounded-md border-[1px] border-blue-400 p-1">
          Typescript
        </p>
        <p className="rounded-md border-[1px] border-blue-400 p-1">
          Tailwind CSS
        </p>
      </div>
      <div className="mb-6 space-y-4 text-sm text-gray-300">
        <p>
          A clone of the social media Instagram. Made with Next.js, Firebase and
          Tailwind CSS.
        </p>
        <p>
          This project was made for studying proporses, focused in practicing
          Firebase features like Authentication, Firestore and Storage.
        </p>
      </div>
      <div className="flex space-x-4">
        <a className="button">Live Demo</a>
        <a className="group flex cursor-pointer items-center gap-2 text-sm text-blue-400">
          Read More
          <BsArrowRight className="transition-transform group-hover:translate-x-2" />
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
