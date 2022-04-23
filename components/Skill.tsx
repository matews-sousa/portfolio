import React from "react";

interface Props {
  source: string;
  name: string;
}

const Skill = ({ source, name }: Props) => {
  return (
    <div className="group flex flex-col items-center justify-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-neutral-800 shadow-md transition-all group-hover:-translate-y-2">
        <img src={source} className="h-14 w-14" alt={`${name} logo`} />
      </div>
      <p className="font-thin">{name}</p>
    </div>
  );
};

export default Skill;
