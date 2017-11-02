import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestUserProfile } from '../../actions/user_profile_actions';
import { requestFriendships } from '../../actions/friendship_actions';
import Welcome from './Welcome';

const mapStateToProps = ({ session, profile, friendships }) => {
  return {
    currentUser: session.currentUser,
    userProfile: profile.userProfile,
    friendships: friendships.entities,
  }
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    requestUserProfile: (userProfile) => dispatch(requestUserProfile(userProfile)),
    requestFriendships: () => dispatch(requestFriendships()),
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome));
