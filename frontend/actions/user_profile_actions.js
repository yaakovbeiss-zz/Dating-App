import * as APIUtil from '../util/user_profile_api_util';

export const RECEIVE_USER_PROFILE = 'RECEIVE_USER_PROFILE';
export const RECEIVE_USER_PROFILE_ERRORS = 'RECEIVE_USER_PROFILE_ERRORS';

export const receiveUserProfile = profile => ({
  type: RECEIVE_USER_PROFILE,
  profile
});

export const receiveUserProfileErrors = errors => ({
  type: RECEIVE_USER_PROFILE_ERRORS,
  errors
});

export const requestUserProfile = id => dispatch => (
  APIUtil.fetchUserProfile(id)
    .then((user_profile) =>
      dispatch(receiveUserProfile(user_profile))
    )
)

export const createUserProfile = profile => dispatch => (
  APIUtil.createUserProfile(profile).then(profile => (
    dispatch(receiveUserProfile(profile))
  ), err => (
    dispatch(receiveUserProfileErrors(err.responseJSON))
  ))
);
