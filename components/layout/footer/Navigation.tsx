import NavItem from "../NavItem";
import { NavItemData } from "../types";

interface Props {
  className?: string;
  items: NavItemData[];
}

export default function Navigation({ className, items }: Props) {
  return (
    <nav className={className}>
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
  );
}
