import React from 'react';
import {withRouter} from 'react-router-dom';
import './mainpage.scss';
import Postcard from '../posts/post_card';
import SearchBar from '../search/search_form';
import { AiFillCar } from "react-icons/ai";

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
    window.scrollTo(0,0);
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
          <div className="title-container">
            <div className="title-splash">
              <h3>Find a Trip</h3>
              <span>Discover and plan trips for your next adventure.</span>
              <SearchBar />
            </div>
            <div className="get-started-splash">
              <h3>Start your journey!</h3>
              <button
                className="splash-button"
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
            .map((post, index) => <Postcard key={post.id} post={post} index={index} />)
            .slice(0, 6)}
          <div>
            <button onClick={this.sendToPosts} className="splash-button">
              View more trips
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MainPage);