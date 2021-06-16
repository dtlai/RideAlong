import React from "react";
import { withRouter } from "react-router-dom";
import NavBarContainer from "../nav_bar.js/nav_bar_container";
import PostBox from "../posts/post_box";

class UserPosts extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(newState) {
    this.setState({ post: newState.post });
  }


  render() {
    if (!this.state.posts) return null;
    if (this.state.posts.length === 0) {
      return (
        <div>
          <NavBarContainer />
          <h3>There are currently no posts.</h3>
          {/* <button onClick={(e) => this.goToCreate()}>Create a Post</button> */}
        </div>
      );
    } else {
      return (
        <div>
          <NavBarContainer />
          <h2>Post</h2>
          {/* <button onClick={(e) => this.goToCreate()}>Create a Post</button> */}
          <div>
            <div>
              {this.state.posts.map((post) => (
                <PostBox key={post.id} post={post} />
              ))}
            </div>
            <div>Google Map</div>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(UserPosts);
