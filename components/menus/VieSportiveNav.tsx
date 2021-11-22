import React from "react"
import { SideNavigation } from "./SideNavigation"
import sections from "../../data/menus/vie-sportive"

export const VieSportiveNav: React.FC = () => {
  return <SideNavigation rootName="Vie sportive" sections={sections} />
}
