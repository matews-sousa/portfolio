import getProjects from "@/utils/getProjects";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { Toaster } from "react-hot-toast";

interface Props {
  projects: Project[];
}

export default function Home({ projects }: Props) {
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
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
