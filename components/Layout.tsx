import Head from "next/head";
import Link from "next/link";

interface Props {
  title: string;
  children: JSX.Element | JSX.Element[];
}

function Layout({ title, children }: Props) {
  return (
    <div>
      <Head>
        <title>{title} - Comité Régional de Tir à l'Arc du Grand Est</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{" "}
          |
          <Link href="/about">
            <a>About</a>
          </Link>{" "}
          |
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </nav>
      </header>

      {children}

      <footer>{"I`m here to stay"}</footer>
    </div>
  );
}

export default Layout;
