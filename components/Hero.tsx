import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-between lg:flex-row">
      <div className="mt-24 flex flex-col lg:mt-0">
        <div>
          <small className="text-sm">Hello, I am</small>
          <h1 className="text-5xl font-bold">Mateus Sousa</h1>
          <p className="mt-2">Front-end Developer</p>
        </div>
        <div className="mt-6 flex space-x-6">
          <button className="button">About me</button>
          <button className="button from-green-600 to-green-500">
            Download Resume
          </button>
        </div>
        <div className="mt-4 flex space-x-4">
          <a
            className="cursor-pointer hover:text-blue-400"
            aria-label="Github profile"
          >
            <DiGithubBadge className="h-10 w-10" />
          </a>
          <a
            className="cursor-pointer hover:text-blue-400"
            aria-label="Linkedin profile"
          >
            <AiFillLinkedin className="h-10 w-10" />
          </a>
        </div>
      </div>
      <div className="hidden md:block">
        <img
          src="/img/hero.svg"
          alt="Illustration of a guy coding on a laptop"
        />
      </div>

      <div className="absolute bottom-[-5rem] left-[50%] flex h-12 w-6 justify-center rounded-full border-2 border-blue-900 py-1">
        <div className="h-4 w-4 rounded-full bg-blue-900"></div>
      </div>
    </section>
  );
};

export default Hero;
