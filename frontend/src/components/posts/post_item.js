import React from 'react';
import { withRouter } from 'react-router-dom';

class PostItem extends React.Component {
  componentDidMount(){
    let postId = this.props.match.params.postId;
    this.props.fetchPost(postId);
  }

  render() {
    let currentPost = this.props.currentPost ?
      this.props.currentPost.map(post => (
        <ul>
        <li>{post.user}</li>
        <li>{post.title}</li>
        <li>{post.carMake}</li>
        <li>{post.description}</li>
        <li>{post.startLocation}</li>
        <li>{post.endLocation}</li>
        <li>{post.capacity}</li>
        <li>{post.numPassengers}</li>
        <li>{post.price}</li>
        <li>{post.leaveDate}</li>
        </ul>
      )) : 
      <li>Post not found</li>
    return (
      <div>
        <ul>
          {currentPost}
        </ul>
      </div>
    )
  }
}

export default withRouter(PostItem);