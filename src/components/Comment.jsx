import {CommentUser} from "../utils/Icons"
import "../styles/Comment.css"

const Comment = ({username, comment}) => {
  return (
    <div>
        <div className='User-section'>
            <div className="d-flex">
            <img className="User-icon-comment" src={CommentUser} alt="" />
            <p className="User-name ms-2">{username}</p>
            </div>
            <div>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
                <i className="bi bi-star"></i>
                <i className="bi bi-star"></i>
            </div>
        </div>
        <p className="comment-section">{comment}</p>
    </div>
  )
}

export default Comment