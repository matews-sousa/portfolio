import React from "react";
import { DiHtml5, DiCss3, DiJavascript, DiReact, DiGit } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";

const Skills = () => {
  return (
    <section className="">
      <h2 className="mb-12 text-center text-2xl font-semibold">Skills</h2>
      <div className="flex flex-wrap justify-center gap-12">
        <div className="flex flex-col items-center">
          <DiHtml5 className="h-24 w-24 text-blue-500" />
          <p>HTML5</p>
        </div>
        <div className="flex flex-col items-center">
          <DiCss3 className="h-24 w-24 text-blue-500" />
          <p>CSS3</p>
        </div>
        <div className="flex flex-col items-center">
          <DiJavascript className="h-24 w-24 text-blue-500" />
          <p>Javascript</p>
        </div>
        <div className="flex flex-col items-center">
          <DiReact className="h-24 w-24 text-blue-500" />
          <p>React.js</p>
        </div>
        <div className="flex flex-col items-center ">
          <DiGit className="h-24 w-24 text-blue-500" />
          <p>Git</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
