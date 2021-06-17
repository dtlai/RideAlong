import {connect} from 'react-redux';
import { fetchPosts } from '../../actions/post_actions'
import UserProf from './user_prof';

const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.posts.all),
    currentUser: state.session.user,
  };
};

export default connect(mapStateToProps, { fetchPosts })(UserProf);