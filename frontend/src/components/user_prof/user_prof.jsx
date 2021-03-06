import React from "react";
import { withRouter } from "react-router-dom";
import TripBox from "./trip_box";
import './user_prof.scss'

class UserProf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      posts: [],
      requests: [],
    };
  }

  componentDidMount() {

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
        <div className="prof-page-container">
          <div className="user-info">
            <div className="prof-user-info">
              <h1>{this.state.user.firstName} {this.state.user.lastName}</h1>
            </div>
            <div className="more-prof-user-info">
              <h2>{this.state.user.username}</h2>
              <h2>{this.state.user.email}</h2>
            </div>
          </div>

          <div className="ride-container">

            <div className="profile-col">
              <h1>My Trips</h1>
              <div className="user-rides">
                <div className="prof-posts-container">
                  {this.state.posts.length > 0
                    ? this.state.posts.map((post) => {
                        return (
                          <div className="prof-posts">
                            <TripBox key={post.id} trip={post} />
                          </div>
                        );
                      })
                    : "No trips"}
                </div>
              </div>
            </div>

            <div className="profile-col">
              <h1>My Requests</h1>
              <div className="user-requests">
                <div className="prof-requests-container">
                  {this.state.requests.length > 0
                    ? this.state.requests.map((request) => {
                        return (
                          <div className="prof-requests">
                            <TripBox key={request.id} trip={request} />
                          </div>
                        );
                      })
                    : "No requests"}
                </div>
              </div>
            </div>

          </div>

        </div>
      </>
    );
  }
}


export default withRouter(UserProf);
