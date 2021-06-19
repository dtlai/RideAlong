import React from 'react';
// import { FaGithub } from "react-icons/fa";
import NavBarContainer from '../nav_bar/nav_bar_container';
import {withRouter} from 'react-router-dom';
import './mainpage.scss';
import Postcard from '../posts/post_card';
import SearchBar from '../search/search_form';

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
              <button className="get-started-button" onClick={() => this.onSubmit()}>Create a Trip</button>
            </div>
          </div>
        </div>
        <div>Check Out Some Current Trips</div>
        <div className="post-cards-container">
          {this.state.posts.map(post => (
            <Postcard key={post.id} post={post}/>
          )).slice(0, 6)}
          <div>
            <button onClick={this.sendToPosts} className="view-more-button">View more trips</button>
          </div>
        </div>
        <footer>
          Copyright &copy; 2021 RideAlong
        </footer>
      </div>
    )
  }
}

export default withRouter(MainPage);