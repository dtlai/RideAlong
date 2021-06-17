import React from "react";
import { withRouter } from "react-router-dom";
import NavBarContainer from "../nav_bar/nav_bar_container";
import PostBox from "../posts/post_box";

class UserProf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    console.log(this.props.currentUser.id)
    this.props.fetchUser(this.props.currentUser.id);
  }

  render() {
    return (
      <>
        <NavBarContainer />
        <div className="prof-page-container">
          <h1>Here are all my rides!</h1>
          {(this.props.posts) ? (
            this.props.posts.map((post) => {
              return (
                <div>
                  <PostBox key={post.id} post={post} />
                </div>
              );
            })
          ): "No rides"}
          
        </div>
      </>
    );
  }
}


export default UserProf;
