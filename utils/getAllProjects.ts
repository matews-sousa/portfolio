import fs from "fs";
import grayMatter from "gray-matter";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";
import { unified } from "unified";

export const getAllProjects = () => {
  const allProjectsFileNames = fs.readdirSync("./_projects");

  const projects = allProjectsFileNames.map((filename) => {
    const fileContent = fs.readFileSync(`./_projects/${filename}`, "utf-8");
    const { content, data: metadata } = grayMatter(fileContent);
    const contentHtml = unified()
      .use(remarkParse)
      .use(remarkHtml)
      .processSync(content);

    return {
      ...metadata,
      slug: filename.replace(".md", ""),
      content: contentHtml.value,
    };
  });

  return projects;
};
