import React from 'react';
import './post_box.scss';

class PostBox extends React.Component {
  render() {
    let {post} = this.props
    let startDate = post.createdAt.slice(0, 10);
    let dateLeave = post.leaveDate.slice(0, 10);
    return (
      <div className="post-container">
        <div className="post-title-container">
          <span className="post-title">{post.title}</span>
          <span>{startDate}</span>
        </div>
        <div className="post-capacity-container">
          <span>Seats: {post.capacity} </span>
          <span>Seats left: {post.capacity - post.numPassengers}</span>
        </div>
        <div className="post-user-container">
          Driver: {post.user}
        </div>
        <div className="post-locations-container">
          <span>Leaving {post.startLocation} to {post.endLocation} on {dateLeave}</span>
        </div>
        <div>Price range: ${post.price}</div>
      </div>
    )
  }
}

export default PostBox;