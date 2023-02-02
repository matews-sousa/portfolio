import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="mx-auto max-w-5xl px-6 py-10">
        <Navbar />
        {children}
        <footer>Footer</footer>
      </main>
    </>
  );
};

export default Layout;
