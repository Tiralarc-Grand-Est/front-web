import Link from "next/link";
import Image from "next/image";
import fftaImg from "../../../public/images/footer/ffta.png";
import crosImg from "../../../public/images/footer/cros.png";
import grandestImg from "../../../public/images/footer/grandest.png";

interface Props {
  className?: string;
}

export default function Partners({ className }: Props) {
  return (
    <div className={className}>
      <p className="mb-8 max-w-[800px] text-brand-100">
        Le Comité Régional de Tir à l&apos;Arc du Grand Est remercie de leur
        soutien ses partenaires institutionnels, ainsi que la Fédération
        Française de Tir à l&apos;Arc.
      </p>
      <ul className="flex flex-row items-center">
        <li className="mr-8">
          <Link href="https://www.ffta.fr/">
            <a target="_blank" rel="noopener noreferer">
              <Image
                src={fftaImg}
                alt="Fédération Française de Tir à l'Arc"
                width={100}
                height={40}
              />
            </a>
          </Link>
        </li>
        <li className="mr-8">
          <Link href="https://www.grandest.fr/">
            <a target="_blank" rel="noopener noreferer">
              <Image
                src={grandestImg}
                alt="Région Grand Est"
                width={100}
                height={42}
              />
            </a>
          </Link>
        </li>
        <li className="mr-8">
          <Link href="https://sportgrandest.eu/">
            <a target="_blank" rel="noopener noreferer">
              <Image
                src={crosImg}
                alt="Comité Régional Olympique et Sportif du Grand Est"
                width={48}
                height={70}
              />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
