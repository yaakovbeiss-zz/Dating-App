import * as APIUtil from '../util/user_profile_api_util';

export const RECEIVE_USER_PROFILE = 'RECEIVE_USER_PROFILE';

export const receiveUserProfile = profile => ({
  type: RECEIVE_USER_PROFILE,
  profile
});

export const createUserProfile = profile => dispatch => (
  APIUtil.createUserProfile(profile).then(profile => (
    dispatch(receiveUserProfile(profile))
  ))
);
