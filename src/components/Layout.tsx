import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>Mateus Sousa</title>
        <meta name="description" content="Mateus Sousa's personal website" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="mx-auto max-w-5xl space-y-20 px-4 py-10 sm:px-6">
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
