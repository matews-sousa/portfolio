import getProjects from "@/utils/getProjects";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

interface Props {
  projects: Project[];
}

export default function Home({ projects }: Props) {
  return (
    <>
      <Hero />
      <Projects projects={projects} />
      <Skills />
      <Contact />
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
