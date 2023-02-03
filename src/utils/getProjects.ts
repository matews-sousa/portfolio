import * as fs from "fs";
import * as path from "path";
import matter from "gray-matter";

export default async function getProjects() {
  const files = fs.readdirSync(path.join("projects"));
  const projects = files.map((file) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("projects", file),
      "utf-8",
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      ...frontmatter,
      slug: file.split(".")[0],
    };
  });
  return projects;
}
