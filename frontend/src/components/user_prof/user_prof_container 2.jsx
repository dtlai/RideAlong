import {connect} from 'react-redux';
import { fetchUser } from '../../actions/user_actions'
import UserProf from './user_prof';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    posts: state.users.posts,
  };
};

export default connect(mapStateToProps, { fetchUser })(UserProf);