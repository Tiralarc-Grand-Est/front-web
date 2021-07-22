import Head from "next/head";
import { useState } from "react";
import Header from "./Header";
import { NavItemData } from "./types";

interface Props {
  title: string;
  description: string;
  children: JSX.Element | JSX.Element[];
}

export default function Layout({ title, description, children }: Props) {
  const [menuOpened, setMenuOpened] = useState(false);

  function toggleMenu() {
    setMenuOpened(!menuOpened);
  }

  const navItems: NavItemData[] = [
    {
      href: "/comite-regional/equipe/",
      activeHrefPrefix: "/comite-regional/",
      name: "Comité Régional",
    },
    {
      href: "/actualites/",
      activeHrefPrefix: "/actualites/",
      name: "Actualités",
    },
    {
      href: "/vie-sportive/calendrier/",
      activeHrefPrefix: "/vie-sportive/",
      name: "Vie sportive",
    },
    {
      href: "/formations/",
      activeHrefPrefix: "/formations/",
      name: "Formations",
    },
    {
      href: "/clubs/",
      activeHrefPrefix: "/clubs/",
      name: "Clubs",
    },
  ];

  return (
    <div>
      <Head>
        <title>
          {title} - Comité Régional de Tir à l&apos;Arc du Grand Est
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.svg" />
        <link rel="mask-icon" href="/mask-icon.svg" color="#6B3992" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#6B3992" />
      </Head>
      <Header
        items={navItems}
        menuOpened={menuOpened}
        toggleMenu={toggleMenu}
      />
      {children}
      <footer>{"I`m here to stay"}</footer>
    </div>
  );
}
