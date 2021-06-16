import { connect } from 'react-redux';
import { fetchPost } from '../../actions/post_actions';
import PostItem from './post_item';

const mapStateToProps = state => {
  return {
    currentUser: state.session.user,
    currentPost: state.posts.post
  };
};


export default connect(mapStateToProps, {fetchPost})(PostItem);