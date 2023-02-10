import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section
      id="about"
      className="grid grid-cols-1 place-items-center md:grid-cols-3"
    >
      <div className="col-span-2">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">
          Hey, I'm Mateus!
        </h1>
        <p className="mt-2 text-sm font-semibold text-neutral-500 dark:text-neutral-400 md:text-lg">
          Welcome to my personal portfolio.
        </p>
        <p className="m-0 mt-6 mb-6 text-sm font-medium md:w-3/4 md:text-lg">
          I'm a Web Developer from Brazil. Software Engeneering student at
          Federal University of Ceará.
        </p>
      </div>
      <Image
        src="/chilling.svg"
        alt="A Rat chilling in a cup taking a selfie"
        className="col-span-1 w-full"
        loading="eager"
        width={50}
        height={50}
      />
    </section>
  );
};

export default Hero;
