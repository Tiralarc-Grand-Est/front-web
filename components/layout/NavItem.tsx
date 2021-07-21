import Link from "next/link";
import { useRouter } from "next/router";
import { NavItemData } from "./types";

interface Props extends NavItemData {}

export default function Header({ href, activeHrefPrefix, name }: Props) {
  const router = useRouter();
  const active = router.pathname.startsWith(activeHrefPrefix);

  return (
    <li className="p-1 -ml-3 md:ml-0">
      <Link href={href}>
        <a
          className={`font-medium  font-heading p-2 inline-block rounded ${
            active ? "bg-brand-400" : "hover:bg-brand-300"
          }`}
        >
          {name}
        </a>
      </Link>
    </li>
  );
}
