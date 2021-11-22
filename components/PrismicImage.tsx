import React from "react"
import { Image, ImageData } from "prismic-reactjs"
import Img, { FluidObject } from "gatsby-image"

type Props = {
  className?: string
  withCaption?: boolean
  crop?: string
  image?: Image
  imageSharp?: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
}

function getImageTag(image: ImageData, imageSharpFluid?: FluidObject, className?: string): JSX.Element {
  if (imageSharpFluid != null) {
    return <Img fluid={imageSharpFluid} alt={image.alt} className={className} />
  }

  return <img src={image.url} alt={image.alt} className={`img-fluid ${className}`} />
}

export const PrismicImage: React.FC<Props> = ({ className, withCaption, crop, image, imageSharp }) => {
  const realImage = image != null && crop != null && image[crop] != null ? image[crop] : image

  if (realImage) {
    if (withCaption !== false) {
      return (
        <figure className={className}>
          {getImageTag(realImage, imageSharp?.childImageSharp.fluid)}
          <figcaption>{realImage.alt}</figcaption>
        </figure>
      )
    }

    return getImageTag(realImage, imageSharp?.childImageSharp.fluid, className)
  }

  return null
}
