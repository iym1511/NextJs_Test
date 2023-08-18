import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div className="navbar">
          <Link href="/">홈</Link>
          <Link href="/list">리스트</Link>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
