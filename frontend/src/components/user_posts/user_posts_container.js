import { connect } from "react-redux";
import { fetchPosts } from "../../actions/post_actions";
import UserPosts from './user_posts'

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts[ownProps.match.params.postId],
    // currentUser: state.users[state.session.id]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPosts);
