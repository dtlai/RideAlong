import React from 'react';
import NavBarContainer from '../nav_bar.js/nav_bar_container';

class PostShow extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      showFeedback: false
    };
  }

  componentWillMount() {
    this.props.fetchPost(this.props.match.params.postId);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.match.params.postId !== nextProps.match.params.postId) {
        this.props.fetchPost(nextProps.match.params.postId);
    }
  }

  showPopup() {
    if (!this.state.showFeedback) {
      return null;
    } else {
      return(
        <div>
          <h3>Ride Requested!</h3>
        </div>
      )
    }
  }
\

  render() {
    return(
      <div>
        {this.showPopup()}
        <button onClick={}></button>
      </div>
    )
  }
}