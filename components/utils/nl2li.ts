import React from "react"

const newlineRegex = /(\r\n|\r|\n)/g

export default function (str: string) {
  return str
    .split(newlineRegex)
    .filter(line => !line.match(newlineRegex))
    .map(line => React.createElement("li", { key: line }, line))
}
