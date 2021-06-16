import { connect } from 'react-redux';
import PostShow from './post_show';
import { fetchPost } from '../../actions/post_actions';
import { withRouter } from 'react-router-dom';

const mapState = (state, { match }) => {
  const postId = parseInt(match.params.postId);
  return {
    postId,
    post: state.posts.all[postId]
  }
};

const mapDispatch = dispatch => ({
  fetchPost: postId => dispatch(fetchPost(postId)),
  // fetchUser: userId => dispatch(fetchUser(userId))
});

export default withRouter(connect(mapState, mapDispatch)(PostShow));
