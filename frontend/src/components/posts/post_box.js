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
    let startDate = post.createdAt.slice(0, 10);
    let dateLeave = post.leaveDate.slice(0, 10);
    return (
      <div onClick={() => this.props.history.push(`/posts/${post._id}`)} >
        <div className="post-title-container">
          <span className="post-title">{post.title}</span>
          <span>{this.formatDate(startDate)}</span>
        </div>
        <div className="post-capacity-container">
          <span>Total Seats: {post.capacity} </span>
          <span>Seats left: &nbsp;
            {parseInt(post.capacity) - parseInt(post.numPassengers) === 0 ? "FULL" :
              parseInt(post.capacity) - parseInt(post.numPassengers)
            }
          </span>
        </div>
        <div className="post-user-container">
          Driver: {this.props.currentUser.firstName} {this.props.currentUser.lastName}
        </div>
        <div className="post-locations-container">
          <span>Leaving {post.startLocation} to {post.endLocation} on {this.formatDate(dateLeave)}</span>
        </div>
        <div>Price/passenger: ${post.price}</div>
      </div>
    )
  }
}

export default withRouter(PostBox);