import React from 'react';
import {withRouter} from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
import PostBox from './post_box';
import './posts_index.scss';
import CurrentMap from '../google_maps/post_index_map';
import queryString from 'query-string';


class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const query = queryString.parse(this.props.location.search);
    if (query.startLocation) {
      const search = {
        startLocation: query.startLocation,
        endLocation: query.endLocation
      }
      this.props.queryPosts(search);
    } else {
      this.props.fetchPosts();
    }
  }

  componentWillReceiveProps(newState) {
    this.setState({ posts: newState.posts })
  }

  handleClick(postId){
    this.props.deletePost(postId)
      .then(this.props.fetchPosts());
  }

  goToCreate(e) {
    this.props.history.push("/posts/create")
  }

  render() {
    if (!this.state.posts) return null;
    if (this.state.posts.length === 0) {
      return (
        <div>
          <NavBarContainer/>
          <div className="no-posts-container">
            <h3 className="no-posts">There are currently no posts.</h3>
            <h2>Be the first!</h2>
            <button className="create-post-button" onClick={(e) => this.goToCreate()}>Create a Post</button>
          </div>
        </div>
      )
    } else {
      return (
        <div className="posts-container">
          <NavBarContainer />
          <div className="post-index-main-content">
            <div className="posts-index-container">
              <div className="posts-info-container">
                <h2>All Trips</h2>
                <h3>Looking to become a driver?</h3>
                <button id='create-post-button' onClick={(e) => this.goToCreate()}>Plan a Trip</button>
              </div>
              <div className="post-all-container">
                {this.state.posts.map((post) => (
                  <div className="post-container">
                    <PostBox key={post.id} currentUser={this.props.currentUser} post={post}/>
                    { (!this.props.currentUser || (this.props.currentUser.id !== post.user._id && this.props.currentUser.id !== post.user)) ? "" :
                      (<button
                        onClick={() => this.handleClick(post._id)}
                        className="delete-button"
                      >
                        Delete Post
                      </button>)
                    }
                  </div>
                ))}
              </div>
            </div>
            <div className="maps-container">
              <CurrentMap posts={this.state.posts} />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(Posts);