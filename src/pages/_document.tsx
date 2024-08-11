import { Head, Html, Main, NextScript } from "next/document";
import { poppins, roboto } from "../../public/fonts/font";

export default function Document() {
  return (
    <Html lang="en" className={`${poppins.variable} ${roboto.variable}`}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
