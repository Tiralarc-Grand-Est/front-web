import Link from "next/link";

interface Props {
  title: string;
  subtitle: string;
  href: string;
  className?: string;
}

function DownloadCard({ title, subtitle, href, className }: Props) {
  return (
    <div
      className={`flex md:items-center md:flex-row flex-col-reverse ${
        className ?? ""
      }`}
    >
      <Link href={href}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Télécharger
        </a>
      </Link>

      <div className="md:ml-3">
        <p className="text-xl font-bold font-heading">{title}</p>
        <p className="m-0 text-light-900">{subtitle}</p>
      </div>
    </div>
  );
}

export default DownloadCard;
