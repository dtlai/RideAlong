import React from 'react';

class PostBox extends React.Component {
  render() {
    let {post} = this.props
    return (
      <div>
        <div>
          <h3>{post.title}</h3>
        </div>
        <div>
          <h3>{post.startLocation}</h3>
          <h3>{post.endLocation}</h3>
        </div>
      </div>
    )
  }
}

export default PostBox;