import {connect} from 'react-redux';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import Posts from './posts';

const mapStateToProps = state => {
  return {
    posts: Object.values(state.posts.all),
    currentUser: state.session.user,
  };
};

export default connect(mapStateToProps, { fetchPosts, deletePost })(Posts);