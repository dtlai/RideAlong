import React from 'react';
import './post_card.scss';
import {withRouter} from 'react-router-dom';

class Postcard extends React.Component {
  constructor(props) {
    super(props)
    this.sendToPost = this.sendToPost.bind(this);
  }

  sendToPost() {
    this.props.history.push(`/posts/${this.props.post._id}`)
  }

  render() {
    let {post} = this.props
    return (
      <div>
        <div onClick={this.sendToPost} className="postcard-box">
          <div className="card-img">

          </div>
          <div className="card-content">
            <div className="postcard-title">
              {post.title}
            </div>
            <div className="postcard-description">
              {post.description}
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
    )  
  }
}

export default withRouter(Postcard);