import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import AboutMe from "../components/AboutMe";
import Container from "../components/Container";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { IProject } from "../types/project";
import { getAllProjects } from "../utils/getAllProjects";

interface Props {
  projects: IProject[];
}

const Home: NextPage<Props> = ({ projects }) => {
  return (
    <Container>
      <Head>
        <title>Mateus Sousa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Projects projects={projects} />
      </main>
    </Container>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = () => {
  const projects = getAllProjects();

  return {
    props: {
      projects,
    },
  };
};
