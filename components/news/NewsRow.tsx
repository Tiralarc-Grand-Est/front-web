import React from "react"
import { Link } from "gatsby"
import { formatDate } from "../../data/utils"
import { News } from "../../data/news"

interface Props {
  news: News
}

export const NewsRow: React.FC<Props> = ({ news }) => (
  <div className="cardrow">
    <div className="cardrow-body">
      {news.link.startsWith("https://") ? (
        <a href={news.link} target="_blank" rel="noopener noreferrer">
          <h4 className="cardrow-title">{news.title}</h4>
        </a>
      ) : (
        <Link to={news.link}>
          <h4 className="cardrow-title">{news.title}</h4>
        </Link>
      )}
      <h6 className="cardrow-subtitle mb-2 text-muted">Publiée le {formatDate(news.date)}</h6>
      <p className="cardrow-text">{news.content}</p>
    </div>
  </div>
)
