import ProjectCard from "@/components/ProjectCard";
import getProjects from "@/utils/getProjects";
import { BsArrowRightShort } from "react-icons/bs";

interface Props {
  projects: Project[];
}

export default function Home({ projects }: Props) {
  console.log(projects);
  return (
    <>
      <section
        id="about"
        className="grid grid-cols-1 place-items-center md:grid-cols-3"
      >
        <div className="col-span-2">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">
            Hey, I'm Mateus!
          </h1>
          <p className="mt-2 text-sm font-semibold text-neutral-500 md:text-lg">
            Welcome to my personal portfolio.
          </p>
          <p className="m-0 mt-6 mb-6 text-sm font-medium md:w-3/4 md:text-lg">
            I'm a Web Developer from Brazil. Software Engeneering student at
            Federal University of Ceará.
          </p>
        </div>
        <img
          src="/chilling.svg"
          alt="A Rat chilling in a cup taking a selfie"
          className="col-span-1 w-full"
        />
      </section>
      <section id="projects">
        <h2 className="mb-6 text-3xl font-bold text-gray-800 dark:text-white">
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects?.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </section>
      <section id="skills" className="">
        <h2 className="mb-6 text-3xl font-bold text-gray-800 dark:text-white">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map(({ name, icon }) => (
            <div
              key={name}
              className="flex h-32 w-32 flex-col items-center justify-center gap-2 rounded-full p-2 shadow-md ring-1 ring-neutral-200 hover:-translate-y-1 dark:bg-neutral-700 dark:ring-0"
            >
              <img src={`/img/logos/${icon}`} className="w-1/2" />
              <h3 className="font-semibold">{name}</h3>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="mb-2 text-3xl font-bold text-gray-800 dark:text-white">
          Contact
        </h2>
        <p className="mb-8 font-semibold text-gray-600 dark:text-gray-400">
          Send me a message and I'll get back to you as soon as possible.
        </p>
        <div className="grid grid-cols-3">
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
                Email
              </p>
              <a
                href="mailto:mateussdamiano@gmail.com"
                className="text-sm font-medium text-gray-800 dark:text-white"
              >
                mateussdamiano@gmail.com
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
                LinkedIn
              </p>
              <a
                href="https://www.linkedin.com/in/mateus-damiano/"
                className="text-sm font-medium text-gray-800 dark:text-white"
              >
                Mateus Sousa
              </a>
            </div>
          </div>
          <form className="col-span-2 grid grid-cols-2 gap-2">
            <div className="flex flex-col space-y-1">
              <label htmlFor="name" className="font-semibold">
                Name
              </label>
              <input
                id="name"
                name="name"
                className="rounded-md border border-neutral-600 p-2 focus:border-blue-400 focus:outline-none dark:bg-neutral-800"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="name" className="font-semibold">
                Email
              </label>
              <input
                id="name"
                name="name"
                type="email"
                className="rounded-md border border-neutral-600 p-2 focus:border-blue-400 focus:outline-none dark:bg-neutral-800"
                placeholder="johndoe@email.com"
              />
            </div>
            <div className="col-span-2 flex flex-col space-y-1">
              <label htmlFor="name" className="font-semibold">
                Message
              </label>
              <textarea
                id="name"
                name="name"
                className="rounded-md border border-neutral-600 p-2 focus:border-blue-400 focus:outline-none dark:bg-neutral-800"
                placeholder="Your message..."
                rows={5}
              />
            </div>
            <button className="col-span-2 ml-auto flex items-center gap-1 rounded-md bg-blue-400 py-2 px-4 font-semibold text-white hover:bg-blue-600">
              <span>Send</span>
              <BsArrowRightShort className="h-6 w-6" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const projects = await getProjects();

  return {
    props: {
      projects,
    },
  };
}

const skills = [
  {
    name: "HTML",
    icon: "html.png",
  },
  {
    name: "CSS",
    icon: "css.png",
  },
  {
    name: "JavaScript",
    icon: "javascript.png",
  },
  {
    name: "TypeScript",
    icon: "typescript.png",
  },
  {
    name: "React",
    icon: "react.png",
  },
  {
    name: "Next",
    icon: "next.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwind.png",
  },
  {
    name: "PostgreSQL",
    icon: "postgresql.png",
  },
  {
    name: "Prisma",
    icon: "prisma.png",
  },
  {
    name: "Git",
    icon: "git.png",
  },
];
