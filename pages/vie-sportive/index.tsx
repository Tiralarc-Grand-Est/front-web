import React from "react"
import { navigate } from "@reach/router"

const CalendrierIndex: React.FC = () => {
  setTimeout(() => navigate("./calendrier/", { replace: true }), 0)
  return <></>
}

export default CalendrierIndex
