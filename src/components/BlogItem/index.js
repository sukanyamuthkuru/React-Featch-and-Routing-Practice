import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {id, imageUrl, author, avatarUrl, title, topic} = blogItem
  console.log(avatarUrl)
  return (
    <Link to={`/blogs/${id}`} className="list-item-container">
      <div className="list-item-image-container">
        <img src={imageUrl} alt={`item ${id}`} className="list-item-image" />
      </div>
      <div className="details-container">
        <p className="list-title">{topic}</p>
        <h1 className="list-topic">{title}</h1>
        <div className="author-and-author-name-container">
          <img src={avatarUrl} alt={`avtar ${id}`} className="author-image" />
          <p className="author-name">{author}</p>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
