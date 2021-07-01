import React from 'react';
import './post_box.scss';
import { withRouter } from 'react-router-dom';

class PostBox extends React.Component {

  formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  render() {
    let {post} = this.props
    let postDate = this.formatDate(post.createdAt.slice(0, 10));
    let dateLeave = this.formatDate(post.leaveDate.slice(0, 10));
    let seatsRemaining = parseInt(post.capacity) - parseInt(post.numPassengers);
    let seatCapacity = parseInt(post.capacity);
    return (
      <div onClick={() => this.props.history.push(`/posts/${post._id}`)} >
        <div className="post-title-container">
          <span className="post-title">{post.title}</span>
          <span>
            {dateLeave}<br></br><br></br>
            Seats left: {seatsRemaining === 0 ? "FULL" : `${seatsRemaining} of ${seatCapacity}`}
          </span>
        </div>
        <div className="post-user-container">
          { post.user.firstName ? 
          `Driver: ${post.user.firstName} ${post.user.lastName}`
          : `Driver: ${this.props.currentUser.firstName} ${this.props.currentUser.lastName}`
          }
        </div>
        <div className="post-locations-container">
          <span>Trip: {post.startLocation} to {post.endLocation}</span>
        </div>
        <div>Price/passenger: ${post.price}</div>
        <div>Posted: {postDate}</div>
      </div>
    )
  }
}

export default withRouter(PostBox);