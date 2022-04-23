import fs from "fs";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import { DiGithubBadge } from "react-icons/di";
import Container from "../components/Container";
import { IProject } from "../types/project";
import { getProject } from "../utils/getProject";

interface Props {
  project: IProject;
}

const ProjectPage: NextPage<Props> = ({ project }) => {
  return (
    <Container title={`Projects | ${project.title}`}>
      <div className="flex flex-col items-center justify-between space-y-4 py-16 md:flex-row md:space-y-0">
        <h1 className="text-center text-4xl font-bold text-neutral-900 dark:text-neutral-100">
          {project.title}
        </h1>
        <div className="flex space-x-4">
          <a className="button" href={project.liveUrl} target="_blank">
            Live Demo
          </a>
          <a
            className="button grid h-10 w-10 place-content-center rounded-full"
            aria-label="Github repository"
            href={project.repositoryUrl}
            target="_blank"
          >
            <DiGithubBadge className="h-8 w-8" />
          </a>
        </div>
      </div>
      <section className="grid grid-cols-1 gap-2 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <div className="flex items-center space-x-2">
            <h3 className="text-2xl font-semibold text-blue-500">About</h3>
            <div className="h-[2px] w-full bg-blue-500"></div>
          </div>
          <p className="mt-2 mb-4 text-sm">{project.excerpt}</p>
          <div className="flex items-center space-x-2">
            <h3 className="text-2xl font-semibold text-blue-500">Stack</h3>
            <div className="h-[2px] w-full bg-blue-500"></div>
          </div>
          <div className="prose dark:prose-invert">
            <ul className="mt-2 text-sm">
              {project.stack.map((tech) => (
                <li>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img
            src={project.thumbPath}
            alt={`${project.title} thumbnail`}
            className="w-full rounded-md object-cover shadow-md"
          />
        </div>
      </section>
      {project.content && (
        <section
          dangerouslySetInnerHTML={{ __html: project.content }}
          className="prose mx-auto mt-12 max-w-4xl prose-a:text-blue-500 hover:prose-a:text-blue-400 dark:prose-invert"
        ></section>
      )}
    </Container>
  );
};

export default ProjectPage;

export const getStaticPaths: GetStaticPaths = () => {
  const files = fs.readdirSync("./_projects");

  const slugs = files.map((file) => file.replace(".md", ""));
  const paths = slugs.map((slug) => {
    return {
      params: { slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const { slug }: any = params;

  const project = getProject(slug);

  return {
    props: {
      project,
    },
  };
};
