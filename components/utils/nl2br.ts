import React from "react"

const newlineRegex = /(\r\n|\r|\n)/g

export default function (str: string) {
  return str.split(newlineRegex).map((line, index) => {
    if (line.match(newlineRegex)) {
      // eslint-disable-next-line react/no-array-index-key
      return React.createElement("br", { key: index })
    }

    return line
  })
}
