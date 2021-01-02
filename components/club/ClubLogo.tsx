interface Props {
  name: string;
  logoUrl?: string;
  className?: string;
}

function ClubLogo({ name, logoUrl, className }: Props) {
  // return <img className={className} src={logoUrl} alt={name} />;
  return <div className="w-16 h-16 rounded-full shadow-lg bg-light-700"></div>;
}

export default ClubLogo;
