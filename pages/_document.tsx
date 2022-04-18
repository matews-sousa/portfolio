import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-neutral-900">
        <div className="absolute inset-x-0 top-[-2vh] mx-auto h-20 max-w-2xl bg-gradient-to-r from-blue-900 to-blue-400 blur-3xl filter"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
