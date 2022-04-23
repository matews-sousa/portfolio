import Head from "next/head";
import React from "react";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";

const Container = ({
  children,
  title = "Mateus Sousa",
}: {
  children: React.ReactNode;
  title?: string;
}) => {
  return (
    <div className="mx-auto max-w-3xl px-2 text-white">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <MobileMenu />
      <div className="my-24">{children}</div>
    </div>
  );
};

export default Container;
