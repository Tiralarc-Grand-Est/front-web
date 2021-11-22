import { Image, Element } from "prismic-reactjs"
import { FluidObject } from "gatsby-image"

export interface ShortPost {
  _meta: {
    uid: string
    tags: string[]
    firstPublicationDate: string
  }
  title: Element[]
  short_description: Element[]
  image?: Image
  imageSharp?: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
}
export interface Post extends ShortPost {
  content: Element[]
}
