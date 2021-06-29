import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import {withRouter} from 'react-router-dom';
import './mainpage.scss';
import Postcard from '../posts/post_card';
import SearchBar from '../search/search_form';
import { AiFillCar } from "react-icons/ai";
import { Link } from 'react-router-dom';


class MainPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.sendToPosts = this.sendToPosts.bind(this);
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(newState) {
    this.setState({ posts: newState.posts })
  }

  onSubmit() {
    this.props.history.push('/posts/create')
  }

  sendToPosts() {
    this.props.history.push('/posts')
  }

  render() {
    return (
      <div className="parent-main">
        <div className="main-splash">
          <NavBarContainer />
          <div className="title-container">
            <div className="title-splash">
              <h3>Find a Trip</h3>
              <span>Discover and plan trips for your next adventure.</span>
              <SearchBar />
            </div>
            <div className="title-splash">
              <h3>Start your journey!</h3>
              <button
                className="get-started-button"
                onClick={() => this.onSubmit()}
              >
                Create a Trip
              </button>
            </div>
          </div>
        </div>
        <div className="card-header">
          Take a look at some current trips{" "}
          <AiFillCar className="card-header-car" />
        </div>
        <div className="post-cards-container">
          {this.state.posts
            .map((post) => <Postcard key={post.id} post={post} />)
            .slice(0, 6)}
          <div>
            <button onClick={this.sendToPosts} className="view-more-button">
              View more trips
            </button>
          </div>
        </div>
        <footer>
          <>
            <div className="copyright">Copyright &copy; 2021 RideAlong</div>
            <div className="menu-container">
              <p>Menu</p>
              <Link to="/profile">Profile</Link>
              <Link to="/posts">Posts</Link>

              <Link to="/posts/create">Create Post</Link>
              <Link to="/">Home</Link>
            </div>

            <div className="follow-container">
              <p>Follow</p>
              <Link to="/about">About Us</Link>
            </div>

            <div className="get-started-container">
              <p>Get Started</p>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </div>
          </>
        </footer>
      </div>
    );
  }
}

export default withRouter(MainPage);