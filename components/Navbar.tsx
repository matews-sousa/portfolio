import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-6 z-30 mx-auto hidden max-w-3xl px-2 sm:block">
      <div className="flex items-center justify-center space-x-6 rounded-md bg-white/[3%] py-6 shadow-xl backdrop-blur backdrop-filter">
        <a className="cursor-pointer font-medium hover:text-blue-500">home</a>
        <a className="cursor-pointer font-medium hover:text-blue-500">
          about me
        </a>
        <a className="cursor-pointer font-medium hover:text-blue-500">
          projects
        </a>
        <a className="cursor-pointer font-medium hover:text-blue-500">
          contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
