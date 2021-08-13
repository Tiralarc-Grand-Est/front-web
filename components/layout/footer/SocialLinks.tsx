import Link from "next/link";
import Facebook from "../icons/Facebook";
import Twitter from "../icons/Twitter";
import Email from "../icons/Email";

interface Props {
  className?: string;
}

export default function SocialLinks({ className }: Props) {
  const liClassName = "mr-4 md:mr-8";
  const iconClassName = "w-[24px] md:w-[42px]";

  return (
    <ul className={`flex flex-row ${className ?? ""}`}>
      <li className={liClassName}>
        <Link href="https://www.facebook.com/CRTA.GdEst/">
          <a target="_blank" rel="noopener noreferer">
            <Facebook className={iconClassName} />
          </a>
        </Link>
      </li>
      <li className="mr-4 md:mr-8">
        <Link href="https://twitter.com/CRTA_GrandEst">
          <a target="_blank" rel="noopener noreferer">
            <Twitter className={iconClassName} />
          </a>
        </Link>
      </li>
      <li>
        <Link href="mailto:contact@tiralarc-grand-est.fr">
          <a target="_blank" rel="noopener noreferer">
            <Email className={iconClassName} />
          </a>
        </Link>
      </li>
    </ul>
  );
}
