import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import Logo from "../Logo";
import NavItem from "./NavItem";
import { NavItemData } from "./types";

interface Props {
  items: NavItemData[];
  toggleMenu: () => void;
  menuOpened: boolean;
}

export default function Header({ items, toggleMenu, menuOpened }: Props) {
  return (
    <header
      className={`text-white bg-brand-500 sticky ${
        menuOpened ? "h-screen md:h-auto" : ""
      }`}
    >
      <div className="container p-5 mx-auto">
        <nav className="md:flex md:justify-between">
          <div className="flex flex-row justify-between">
            <Link href="/">
              <a className="md:py-3">
                <Logo
                  variant="white"
                  className="w-[92px]"
                  ariaLabel="Accueil"
                />
              </a>
            </Link>
            <button
              className="md:hidden"
              onClick={toggleMenu}
              aria-label="Menu"
            >
              {menuOpened ? (
                <XIcon className="w-5 h-5 text-white" />
              ) : (
                <MenuIcon className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
          <ul
            className={`md:flex md:flex-row pt-11 md:pt-0 ${
              menuOpened ? "" : "hidden"
            }`}
          >
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
    </header>
  );
}
