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
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="dark:background-gradient absolute inset-0 -z-50 max-h-screen" />
        <div className="pointer-events-none absolute inset-0 -z-40 h-full bg-[url('/noisetexture.jpg')] opacity-20 mix-blend-soft-light"></div>
        <div className="space-y-20">
          <Navbar />
          {children}
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Layout;
