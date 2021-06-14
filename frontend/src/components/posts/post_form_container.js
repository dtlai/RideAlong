import { connect } from 'react-redux';
import { submitPost } from '../../actions/';
import PostForm from './post_form';

const mapStateToProps = state => {
  return {
    currentUser: state.session.user,
    newPost: state.posts.new
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitPost: data => dispatch(submitPost(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);