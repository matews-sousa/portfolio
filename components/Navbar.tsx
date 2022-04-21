import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-6 z-30 mx-auto hidden max-w-3xl px-2 sm:block">
      <div className="flex items-center justify-center space-x-6 rounded-md bg-white/[3%] py-6 shadow-xl backdrop-blur backdrop-filter">
        <Link href="/#home">
          <a className="cursor-pointer font-medium hover:text-blue-300 hover:underline">
            home
          </a>
        </Link>
        <Link href="/#about-me">
          <a className="cursor-pointer font-medium hover:text-blue-300 hover:underline">
            about me
          </a>
        </Link>
        <Link href="/#projects">
          <a className="cursor-pointer font-medium hover:text-blue-300 hover:underline">
            projects
          </a>
        </Link>
        <Link href="/#contact">
          <a className="cursor-pointer font-medium hover:text-blue-300 hover:underline">
            contact
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
