import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import NavBar from './nav_bar';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  currentUser: state.session.user,
});

export default connect(mapStateToProps,{ logout })(NavBar);