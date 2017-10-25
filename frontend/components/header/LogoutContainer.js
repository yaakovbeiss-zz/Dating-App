import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Logout from './Logout';

const mapDispatchToProps = ( dispatch ) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Logout);
