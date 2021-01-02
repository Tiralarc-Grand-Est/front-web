import ClubLogo from "./ClubLogo";
import ChevronDown from "../icons/ChevronDown";
import { MouseEvent, useCallback, useState } from "react";

interface Props {
  name: string;
  place: string;
  logoUrl: string;
  postalAddress: string;
  emailAddress: string;
  siteUrl: string;
}

function ClubDropdown({
  name,
  place,
  logoUrl,
  postalAddress,
  emailAddress,
  siteUrl,
}: Props) {
  const [opened, setOpened] = useState(false);
  const handleClick = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      setOpened(!opened);
    },
    [opened]
  );

  return (
    <div className="flex flex-col p-3 space-y-6 shadow-md bg-light-500">
      <div
        className="flex items-center p-3 space-x-6 rounded-lg cursor-pointer bg-light-500 hover:bg-light-brand"
        onClick={handleClick}
      >
        <ClubLogo className="flex-none" logoUrl={logoUrl} name={name} />
        <div className="flex-auto font-heading">
          <p className="text-lg font-medium uppercase text-brand-500">{name}</p>
          <p className="font-normal">{place}</p>
        </div>
        <ChevronDown className="flex-none w-8 text-brand-500" up={opened} />
      </div>
      <div className={opened ? "flex-none px-8 pb-3" : "hidden"}>
        <p>Details</p>
      </div>
    </div>
  );
}

export default ClubDropdown;
