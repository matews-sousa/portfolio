import React from "react";

const AboutMe = () => {
  return (
    <section id="about-me">
      <div className="mb-6 flex items-center gap-2">
        <h2 className="text-3xl font-semibold">about me</h2>
        <div className="h-1 flex-1 bg-blue-500"></div>
      </div>
      <div className="grid items-center md:grid-cols-2">
        <div className="hidden md:block">
          <img
            src="/img/aboutme.svg"
            alt="Illustration of a guy reading a book"
          />
        </div>
        <div className="mt-6 space-y-4 md:mt-0">
          <p className="text-sm">
            Hi, I'm Mateus Sousa, a self-taught Front-end developer from Brazil.
            I'm currently graduating in Software Engeneering at Federal
            Univesity of Ceará.
          </p>
          <p className="text-sm">
            Currently I'm focused in learning more about Web Development and
            UI/UX Design. I have interest in Back-end development as well.
          </p>
          <p className="text-sm">
            You can view more about me in my <span>LinkedIn</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
