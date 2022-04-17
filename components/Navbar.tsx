import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-6 z-30 mx-auto max-w-3xl px-2">
      <div className="flex items-center justify-center space-x-6 rounded-md bg-white/[3%] py-6 shadow-xl backdrop-blur backdrop-filter">
        <a>home</a>
        <a>about me</a>
        <a>projects</a>
        <a>contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
