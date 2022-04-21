import React from "react";
import SectionContainer from "./SectionContainer";

const AboutMe = () => {
  return (
    <SectionContainer id="about-me">
      <div className="mb-6 flex items-center gap-2">
        <h2 className="text-3xl font-semibold">about me</h2>
        <div className="h-1 flex-1 bg-blue-500"></div>
      </div>
      <div className="grid items-center md:grid-cols-2">
        <div className="hidden md:block">
          <img src="/img/aboutme.svg" alt="Glasses above a book" />
        </div>
        <div className="mt-6 space-y-4 md:mt-0">
          <p>
            Hi, I'm Mateus Sousa, a Web Developer from Brazil. I'm currently
            graduating in Software Engeneering at Federal Univesity of Ceará.
          </p>
          <p>
            I study Web Development since 2020, specially Frontend, and now I'm
            learning more about Backend development.
          </p>
          <p>
            You can view more about me in my{" "}
            <a className="cursor-pointer text-blue-400 underline" href="">
              LinkedIn
            </a>{" "}
            or{" "}
            <a
              className="cursor-pointer text-blue-400 underline"
              href="https://github.com/matews-sousa"
              target="_blank"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutMe;
