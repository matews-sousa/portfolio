import React from "react";
import SectionContainer from "./SectionContainer";

const AboutMe = () => {
  return (
    <SectionContainer id="about-me" title="about me">
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
            <a
              className="cursor-pointer text-blue-400 underline transition-colors hover:bg-blue-500 hover:text-white"
              href=""
              target="_blank"
            >
              LinkedIn
            </a>{" "}
            or{" "}
            <a
              className="cursor-pointer text-blue-400 underline transition-colors hover:bg-blue-500 hover:text-white"
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
