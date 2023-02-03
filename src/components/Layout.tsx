import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>Mateus Sousa</title>
        <meta name="description" content="Mateus Sousa's personal website" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="mx-auto max-w-5xl space-y-20 px-6 py-10">
        <Navbar />
        {children}
      </main>
    </>
  );
};

export default Layout;
