import { connect } from 'react-redux';
import AddPic from './AddPic';
import { createUserProfile } from '../../actions/user_profile_actions';

const mapStateToProps = ({ session, userProfile }) => {
  return {
    currentUser: session.currentUser
  }
};

const mapDispatchToProps = dispatch => ({
  createUserProfile: (profile) => dispatch(createUserProfile(profile)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPic)
