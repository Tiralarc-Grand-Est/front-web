import Head from "next/head";
import Link from "next/link";
import ClubDropdown from "../components/club/ClubDropdown";

export default function Showroom() {
  return (
    <div>
      <Head>
        <title>Showroom - Comité Régional de Tir à l&aops;Arc du Grand Est</title>
      </Head>

      <main>
        <h1 className="heading-1">Showroom</h1>

        <h2 className="heading-2">Buttons</h2>
        <p>
          <Link href="/" passHref>
            <a className="mx-4 my-4 btn-primary-sm">Choisir une discipline</a>
          </Link>

          <Link href="/" passHref>
            <a className="mx-4 my-4 btn-primary">Choisir une discipline</a>
          </Link>

          <Link href="/" passHref>
            <a className="mx-4 my-4 btn-primary-lg">Choisir une discipline</a>
          </Link>

          <Link href="/" passHref>
            <a className="mx-4 my-4 btn-light-sm">Choisir une discipline</a>
          </Link>

          <Link href="/" passHref>
            <a className="mx-4 my-4 btn-light">Choisir une discipline</a>
          </Link>

          <Link href="/" passHref>
            <a className="mx-4 my-4 btn-light-lg">Choisir une discipline</a>
          </Link>
        </p>

        <h2 className="heading-2">Club</h2>
        <div className="p-4">
          <ClubDropdown
            name="Arc Faulquinois"
            place="Faulquemont"
            logoUrl="#"
            postalAddress="COSEC 57380 Faulquemont"
            emailAddress="contact@arc-faulquinois.fr"
            siteUrl="https://arc-faulquinois.fr"
          />
        </div>
      </main>
    </div>
  );
}
