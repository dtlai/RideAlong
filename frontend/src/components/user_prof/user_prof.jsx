import React from "react";
import { withRouter } from "react-router-dom";
import NavBarContainer from "../nav_bar/nav_bar_container";
import PostBox from "../posts/post_box";
import './user_prof.scss'

class UserProf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      posts: [],
    };
    console.log(this.props.currentUser)
  }

  componentDidMount() {
    // console.log(this.props.currentUser)
    this.props.fetchUser(this.props.currentUser.id)
      .then(() => this.setState({
        user: this.props.user,
        posts: this.props.posts,

      }))


  }

  render() {
    if (!this.state.user) {
      return null
    }
    return (
      <>
        <NavBarContainer />
        <div className="prof-page-container">
          <div className="prof-user-info">
            <p>{this.state.user.firstName}</p>
            <p>{this.state.user.lastName}</p>
          </div>
          <div className="more-prof-user-info">
            <p>{this.state.user.email}</p>
            <p>{this.state.user.username}</p>
          </div>
          <div className="user-rides">
            <h1>Here are all my rides!</h1>
            <div className="prof-posts-container">
              {this.state.posts
                ? this.state.posts.map((post) => {
                    return (
                      <div className="prof-posts">
                        <PostBox key={post.id} post={post} />
                      </div>
                    );
                  })
                : "No rides"}
            </div>
          </div>
          {/* <div className="user-requests">
              {this.state.requests ? 
              this.state.requests.map((request) =>)
            }
          </div> */}
        </div>
      </>
    );
  }
}


export default withRouter(UserProf);
