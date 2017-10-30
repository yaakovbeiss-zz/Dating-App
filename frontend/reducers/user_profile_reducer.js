import merge from 'lodash/merge';

import { RECEIVE_USER_PROFILE } from '../actions/user_profile_actions';

const defaultState = Object.freeze({
  userProfile: {}
});

const UserProfileReducer = (state = defaultState, action) => {
  Object.freeze(state)

  switch(action.type) {
    case RECEIVE_USER_PROFILE:
      const userProfile = action.profile;
      return merge({}, defaultState, {
        userProfile
      });
      break;

    default:
      return state;
  }
};

export default UserProfileReducer;
