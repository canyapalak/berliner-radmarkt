import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-spartan bg-neutral-50 dark:bg-stone-800 transition-colors duration-500">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
