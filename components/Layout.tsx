import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

interface Props {
  title: string;
  children: JSX.Element | JSX.Element[];
}

function Layout({ title, children }: Props) {
  const [menuOpened, setMenuOpened] = useState(false);

  function toggleMenu() {
    setMenuOpened(!menuOpened);
  }

  return (
    <div>
      <Head>
        <title>{title} - Comité Régional de Tir à l&apos;Arc du Grand Est</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="text-white bg-brand-500">
        <div className="container p-5 mx-auto">
          <nav className="md:flex md:justify-between">
            <div className="flex flex-row justify-between">
              <Link href="/">
                <a>
                  <Logo />
                </a>
              </Link>
              <button className="bg-purple-800 md:hidden" onClick={toggleMenu}>
                menu
              </button>
            </div>
            <ul
              className={`hidden md:flex md:flex-row ${
                menuOpened ? "active" : ""
              }`}
            >
              <li className="pr-5">
                <Link href="/comite-regional/equipe/">
                  <a>Comité Régional</a>
                </Link>
              </li>
              <li className="pr-5">
                <Link href="/actualites/">
                  <a>Actualités</a>
                </Link>
              </li>
              <li className="pr-5">
                <Link href="/vie-sportive/calendrier/">
                  <a>Vie sportive</a>
                </Link>
              </li>
              <li className="pr-5">
                <Link href="/formations/">
                  <a>Formations</a>
                </Link>
              </li>
              <li>
                <Link href="/clubs/">
                  <a>Clubs</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {children}
      <footer>{"I`m here to stay"}</footer>
    </div>
  );
}

export default Layout;
