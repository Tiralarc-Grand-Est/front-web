import Head from "next/head";
import { useState } from "react";
import SEO from "./head/SEO";
import Favicon from "./head/Favicon";
import Header from "./Header";
import Footer from "./Footer";
import { NavItemData, NavItemLayoutData } from "./types";

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

  const navItems: NavItemLayoutData[] = [
    {
      href: "/",
      name: "Accueil",
      header: false,
      footer: true,
    },
    {
      href: "/comite-regional/equipe/",
      activeHrefPrefix: "/comite-regional/",
      name: "Comité Régional",
      header: true,
      footer: true,
    },
    {
      href: "/actualites/",
      activeHrefPrefix: "/actualites/",
      name: "Actualités",
      header: true,
      footer: true,
    },
    {
      href: "/vie-sportive/calendrier/",
      activeHrefPrefix: "/vie-sportive/",
      name: "Vie sportive",
      header: true,
      footer: true,
    },
    {
      href: "/formations/",
      activeHrefPrefix: "/formations/",
      name: "Formations",
      header: true,
      footer: true,
    },
    {
      href: "/clubs/",
      activeHrefPrefix: "/clubs/",
      name: "Clubs",
      header: true,
      footer: true,
    },
    {
      href: "/donnees-personnelles/",
      activeHrefPrefix: "/donnees-personnelles/",
      name: "Données personnelles",
      header: false,
      footer: true,
    },
    {
      href: "/mentions-legales/",
      activeHrefPrefix: "/mentions-legales/",
      name: "Mentions légales",
      header: false,
      footer: true,
    },
    {
      href: "/ressources-graphiques/",
      activeHrefPrefix: "/ressources-graphiques/",
      name: "Ressources graphiques",
      header: false,
      footer: true,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SEO
        title={title}
        siteTitle="Comité Régional de Tir à l'Arc du Grand Est"
        description={description}
        twitterHandle="CRTA_GrandEst"
      />
      <Favicon />
      <Header
        items={navItems.filter(({ header }) => header)}
        menuOpened={menuOpened}
        toggleMenu={toggleMenu}
      />
      <main className="flex-grow flex-shrink-0">{children}</main>
      <Footer items={navItems.filter(({ footer }) => footer)} />
    </div>
  );
}
