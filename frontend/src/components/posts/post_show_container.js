import { connect } from 'react-redux';
import PostShow from './post_show';
import { fetchPost } from '../../actions/post_actions';
import { withRouter } from 'react-router-dom';

const mapState = (state, { match }) => {
  const postId = parseInt(match.params.postId);
  return {
    postId,
    post: state.posts[postId]
  }
};

const mapDispatch = dispatch => ({
  fetchPost: postId => dispatch(fetchPost(postId))
});

export default withRouter(connect(mapState, mapDispatch)(PostShow));
