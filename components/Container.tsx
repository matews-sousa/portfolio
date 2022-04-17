import React from "react";
import Navbar from "./Navbar";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto max-w-3xl px-2 text-white">
      <Navbar />
      <div className="my-24">{children}</div>
    </div>
  );
};

export default Container;
