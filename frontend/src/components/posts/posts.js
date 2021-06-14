import React from 'react';
import {withRouter} from 'react-router-dom';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(newState) {
    this.setState({ posts: newState.posts })
  }

  render() {
    if (!this.state.posts) return null;
    return (
      <div>
        <h2>All Posts</h2>
        {this.state.posts.map(post => (
          <PostBox key={post.id} post={post} />
        ))}
      </div>
    )
  }
}

export default withRouter(Post);