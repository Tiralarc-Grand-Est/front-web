import React from "react"
import { Link } from "gatsby"
import { RichText } from "prismic-reactjs"
import { ShortPost } from "./types"
import { PrismicImage } from "../PrismicImage"
import { formatDate } from "../../data/utils"
import { linkResolver } from "../../utils/linkResolver"

interface Props {
  post: ShortPost
  className?: string
}

export const PostCard: React.FC<Props> = ({ post, className }) => (
  <div className={`card ${className ?? ""}`}>
    <PrismicImage className="card-img-top" crop="thumbnail" withCaption={false} image={post.image} imageSharp={post.imageSharp} />
    <div className="card-body">
      <Link to={`/blog/${post._meta.uid}/`}>
        <h4 className="card-title">{RichText.asText(post.title)}</h4>
      </Link>
      <h6 className="cardrow-subtitle mb-2 text-muted">Publié le {formatDate(new Date(post._meta.firstPublicationDate))}</h6>
      <p className="card-text">
        <RichText render={post.short_description} linkResolver={linkResolver} />
      </p>
    </div>
  </div>
)
