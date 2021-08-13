import Link from "next/link";
import Image from "next/image";
import Logo from "../Logo";
import { NavItemData } from "./types";
import backgroundImg from "../../public/images/footer/cibles-footer@3x.png";
import SocialLinks from "./footer/SocialLinks";
import Navigation from "./footer/Navigation";
import Partners from "./footer/Partners";

interface Props {
  items: NavItemData[];
}

export default function Footer({ items }: Props) {
  return (
    <footer className="text-white bg-brand-500">
      <div className="relative h-[100px] sm:h-[150px] md:h-[200px]">
        <Image
          src={backgroundImg}
          alt="Cibles anglaises sur une compétition"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
        />
      </div>
      <div className="container px-5 py-6 mx-auto md:pb-14">
        <div className="flex flex-row items-center justify-between my-8">
          <Link href="/">
            <a>
              <Logo
                variant="white"
                className="w-[134px] md:w-[268px]"
                ariaLabel="Accueil"
              />
            </a>
          </Link>
          <SocialLinks />
        </div>
        <Navigation className="flex justify-between my-8" items={items} />
        <Partners className="mt-12 mb-4" />
      </div>
    </footer>
  );
}
