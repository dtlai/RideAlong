import React from "react";
import { withRouter } from "react-router-dom";
import NavBarContainer from "../nav_bar/nav_bar_container";
import PostBox from "../posts/post_box";
import RequestBox from "../requests/request_box"
import './user_prof.scss'

class UserProf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      posts: [],
      requests: [],
    };
    console.log(this.props.currentUser)
  }

  componentDidMount() {
    // console.log(this.props.currentUser)
    this.props.fetchUser(this.props.currentUser.id)
      .then(() => this.setState({
        user: this.props.user,
        posts: this.props.posts,
        requests: this.props.requests,
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
          <div className="user-info">
            <div className="prof-user-info">
              <h1>{this.state.user.firstName} {this.state.user.lastName}</h1>
            </div>
            <div className="more-prof-user-info">
              <h2>{this.state.user.email}</h2>
              <h2>{this.state.user.username}</h2>
            </div>
          </div>

          <div className="ride-container">


            <div className="user-rides">
              <h1>My trips</h1>
              <div className="prof-posts-container">
                {this.state.posts
                  ? this.state.posts.map((post) => {
                      return (
                        <div className="prof-posts">
                          <PostBox key={post.id} post={post} />
                        </div>
                      );
                    })
                  : "No trips"}
              </div>
            </div>


            <div className="user-requests">
              <h1>My requests</h1>
              <div className="prof-requests-container">
                {this.state.requests
                  ? this.state.requests.map((request) => {
                      return (
                        <div className="prof-requests">
                          <RequestBox key={request.id} request={request} />
                        </div>
                      );
                    })
                  : "No requests"}
              </div>
            </div>

          </div>

        </div>
      </>
    );
  }
}


export default withRouter(UserProf);
