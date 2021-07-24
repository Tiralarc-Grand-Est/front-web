import Link from "next/link";
import Image from "next/image";
import Logo from "../Logo";
import NavItem from "./NavItem";
import { NavItemData } from "./types";
import backgroundImg from "../../public/images/cibles-footer@3x.png";
import Facebook from "./icons/Facebook";
import Twitter from "./icons/Twitter";
import Email from "./icons/Email";

interface Props {
  items: NavItemData[];
}

export default function Footer({ items }: Props) {
  return (
    <footer className="text-white bg-brand-500">
      <Image
        src={backgroundImg}
        alt="Cibles anglaises sur une compétition"
        width={1440}
        height={200}
      />
      <div className="container px-5 pt-10 pb-10 mx-auto md:pb-20">
        <div className="md:flex md:flex-row md:items-center md:justify-between">
          <Link href="/">
            <a>
              <Logo variant="white" className="w-[268px]" ariaLabel="Accueil" />
            </a>
          </Link>
          <ul className="flex flex-row mt-8 md:mt-0">
            <li className="mr-8">
              <Link href="https://www.facebook.com/CRTA.GdEst/">
                <a target="_blank" rel="noopener noreferer">
                  <Facebook />
                </a>
              </Link>
            </li>
            <li className="mr-8">
              <Link href="https://twitter.com/CRTA_GrandEst">
                <a target="_blank" rel="noopener noreferer">
                  <Twitter />
                </a>
              </Link>
            </li>
            <li>
              <Link href="mailto:contact@tiralarc-grand-est.fr">
                <a target="_blank" rel="noopener noreferer">
                  <Email />
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <p className="my-8 max-w-[800px] text-brand-100">
          Le Comité Régional de Tir à l&apos;Arc du Grand Est remercie de leur
          soutien ses partenaires institutionnels, ainsi que la Fédération
          Française de Tir à l&apos;Arc.
        </p>
        <nav className="flex justify-between">
          <ul className="grid grid-cols-1 -ml-2 gap-x-4 gap-y-1 md:grid-cols-2">
            {items.map(({ href, activeHrefPrefix, name }) => (
              <NavItem
                key={href}
                href={href}
                activeHrefPrefix={activeHrefPrefix}
                name={name}
              />
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
