import React from "react"
import { SideNavigation } from "./SideNavigation"
import sections from "../../data/menus/comite-regional"

export const ComiteRegionalNav: React.FC = () => {
  return <SideNavigation rootName="Le Comité Régional" sections={sections} />
}
