import Link from "next/link";
import Facebook from "../icons/Facebook";
import Twitter from "../icons/Twitter";
import Email from "../icons/Email";

interface Props {
  className?: string;
}

export default function SocialLinks({ className }: Props) {
  return (
    <ul className={`flex flex-row ${className ?? ""}`}>
      <li className="mr-4 md:mr-8">
        <Link href="https://www.facebook.com/CRTA.GdEst/">
          <a target="_blank" rel="noopener noreferer">
            <Facebook className="md:w-[42px] w-[24px]" />
          </a>
        </Link>
      </li>
      <li className="mr-4 md:mr-8">
        <Link href="https://twitter.com/CRTA_GrandEst">
          <a target="_blank" rel="noopener noreferer">
            <Twitter className="md:w-[42px] w-[24px]" />
          </a>
        </Link>
      </li>
      <li>
        <Link href="mailto:contact@tiralarc-grand-est.fr">
          <a target="_blank" rel="noopener noreferer">
            <Email className="md:w-[42px] w-[24px]" />
          </a>
        </Link>
      </li>
    </ul>
  );
}
