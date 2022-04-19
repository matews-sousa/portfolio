import fs from "fs";
import grayMatter from "gray-matter";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";
import { unified } from "unified";

export const getProject = (project: string) => {
  const fileContent = fs.readFileSync(`./_projects/${project}.md`, "utf-8");
  const { content, data: metadata } = grayMatter(fileContent);
  const contentHtml = unified()
    .use(remarkParse)
    .use(remarkHtml)
    .processSync(content);

  return {
    ...metadata,
    content: contentHtml.value,
  };
};
