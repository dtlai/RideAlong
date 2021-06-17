import React from "react";
import { withRouter } from "react-router-dom";
import NavBarContainer from "../nav_bar/nav_bar_container";
import PostBox from '../posts/post_box'

class UserProf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount () {
      this.props.fetchPosts()
  }

  render() {
    return (
      <>
        <NavBarContainer />
        <div className="prof-page-container">
          <h1>Here are all my rides!</h1>
          {this.state.posts.map((post) => {
            if (this.props.currentUser.id === post.user) {
                return (
                    <div>
                        <PostBox key={post.id} post={post} />
                    </div>
                )
            }
        })}
        </div>
      </>
    );
  }
}

export default UserProf;
