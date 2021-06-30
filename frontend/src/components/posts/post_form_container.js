import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';
import PostForm from './post_form';

const mapStateToProps = state => {
  console.log(state)
  return {
    currentUser: state.session.user,
    newPost: state.posts.new,
    errors: state.errors.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPost: data => dispatch(createPost(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);