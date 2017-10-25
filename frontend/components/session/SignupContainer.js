import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import Signup from './Signup';

const mapStateToProps = ({ session, error }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: error.entities,
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
