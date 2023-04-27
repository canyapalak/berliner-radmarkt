import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
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
      <body className="font-spartan ">
        <NavigationBar />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
