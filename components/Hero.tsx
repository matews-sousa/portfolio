import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-between lg:flex-row">
      <div className="mt-24 flex flex-col lg:mt-0">
        <div>
          <h1 className="text-4xl font-bold">Hi, I'm Mateus Sousa</h1>
          <p className="mt-2 text-xl font-thin text-gray-300">Web Developer</p>
        </div>
        <div className="mt-4 flex space-x-4">
          <a
            className="cursor-pointer text-blue-400 transition-colors hover:scale-105 hover:text-gray-200"
            aria-label="Github profile"
            href="https://github.com/matews-sousa"
            target="_blank"
          >
            <AiFillGithub className="h-10 w-10" />
          </a>
          <a
            className="cursor-pointer text-blue-400 transition-colors hover:scale-105 hover:text-gray-200"
            aria-label="Linkedin profile"
          >
            <AiFillLinkedin className="h-10 w-10" />
          </a>
          <a
            className="cursor-pointer text-blue-400 transition-colors hover:scale-105 hover:text-gray-200"
            aria-label="Linkedin profile"
            href="mailto:mateussdamiano@gmail.com"
          >
            <AiFillMail className="h-10 w-10" />
          </a>
        </div>
      </div>
      <div className="hidden md:block">
        <img
          src="/img/hero.svg"
          alt="Illustration of a guy coding on a laptop"
        />
      </div>
    </section>
  );
};

export default Hero;
