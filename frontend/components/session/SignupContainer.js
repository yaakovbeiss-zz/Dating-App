import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import Signup from './Signup';

const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
  }
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    signup: (user) => dispatch(signup(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
