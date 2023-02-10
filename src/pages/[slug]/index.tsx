import React from "react";
import getProjects from "@/utils/getProjects";
import * as fs from "fs";
import * as path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { MDXRemoteSerializeResult } from "next-mdx-remote/dist";
import { serialize } from "next-mdx-remote/serialize";
import Image from "next/image";

const Project = ({
  project,
  content,
}: {
  project: Project;
  content: MDXRemoteSerializeResult;
}) => {
  return (
    <article className="prose mx-auto prose-a:text-blue-500 hover:prose-a:bg-blue-500 hover:prose-a:text-white prose-img:scale-100 prose-img:rounded-md dark:prose-invert md:prose-img:scale-110 lg:prose-xl">
      <Image
        src={project.thumbPath}
        alt={`${project.title} thumbnail`}
        className="w-full"
        loading="eager"
        width={1200}
        height={768}
      />
      <h1>{project.title}</h1>
      <p>{project.excerpt}</p>
      <MDXRemote {...content} />
    </article>
  );
};

export default Project;

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("projects", params.slug + ".mdx"),
    "utf-8",
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      project: {
        ...frontmatter,
      },
      content: mdxSource,
    },
  };
}

export async function getStaticPaths() {
  const projects = await getProjects();
  const paths = projects.map((project) => ({ params: { slug: project.slug } }));

  return {
    paths,
    fallback: false,
  };
}
