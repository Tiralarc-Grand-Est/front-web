import Link from "next/link";
import { useRouter } from "next/router";
import { NavItemData } from "./types";

interface Props extends NavItemData {
  className?: string;
}

export default function Header({
  href,
  activeHrefPrefix,
  name,
  className,
}: Props) {
  const router = useRouter();
  const active =
    activeHrefPrefix != null
      ? router.pathname.startsWith(activeHrefPrefix)
      : false;

  return (
    <li className={className}>
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
