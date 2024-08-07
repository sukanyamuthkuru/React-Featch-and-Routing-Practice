// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogDetails: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      id: data.id,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
    }
    console.log(data)
    this.setState({blogDetails: updatedData, isLoading: false})
  }

  renderingdetails = () => {
    const {blogDetails} = this.state
    const {author, avatarUrl, content, id, imageUrl, title} = blogDetails
    return (
      <div className="details-app-container">
        <div className="details-container">
          <h1 className="details-heading">{title}</h1>
          <div className="avtar-and-author-details-container">
            <img
              src={avatarUrl}
              alt={`avatar ${id}`}
              className="avatar-details"
            />
            <p className="avatar-details-para">{author}</p>
          </div>
          <div className="image-container-details">
            <img src={imageUrl} alt={title} className="details-image" />
          </div>
          <p className="content-details">{content}</p>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderingdetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
