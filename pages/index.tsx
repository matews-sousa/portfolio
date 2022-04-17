import type { NextPage } from "next";
import Head from "next/head";
import AboutMe from "../components/AboutMe";
import Container from "../components/Container";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Mateus Sousa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="space-y-48">
        <Hero />
        <div className="px-1">
          <AboutMe />
        </div>
        <Skills />
        <Projects />
      </main>
    </Container>
  );
};

export default Home;
