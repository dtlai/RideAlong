import React from 'react';
import './post_box.scss';

class PostBox extends React.Component {
  render() {
    let {post} = this.props
    return (
      <div className="post-container">
        <div className="post-title-container">
          <h3>{post.title}</h3>
        </div>
        <div className="post-user-container">
          User:&nbsp;{post.user}
        </div>
        <div className="post-locations-container">
          <h3>From:&nbsp;{post.startLocation}</h3>
          <h3>To:&nbsp;{post.endLocation}</h3>
        </div>
      </div>
    )
  }
}

export default PostBox;