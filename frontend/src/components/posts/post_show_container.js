import { connect } from 'react-redux';
import PostShow from './post_show';
import { fetchPost } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';

const mapState = (state, { match }) => ({
  post: state.posts.post,
  postId: match.params.postId,
  userId: state.session.user.id
});

const mapDispatch = dispatch => ({
  fetchPost: postId => dispatch(fetchPost(postId)),
  fetchUser: userId => dispatch(fetchUser(userId))
});

export default withRouter(connect(mapState, mapDispatch)(PostShow));
