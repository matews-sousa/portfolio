import ProjectCard from "./ProjectCard";

const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <section id="projects">
      <h2 className="mb-6 text-3xl font-bold text-gray-800 dark:text-white">
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 items-center">
        {projects?.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
