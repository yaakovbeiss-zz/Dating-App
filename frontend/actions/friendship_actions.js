import * as APIUtil from '../util/friendship_api_util';

export const RECEIVE_FRIENDSHIPS = 'RECEIVE_FRIENDSHIPS';

export const receiveFriendships = friendships => ({
  type: RECEIVE_FRIENDSHIPS,
  friendships
});

export const requestFriendships = () => dispatch => (
  APIUtil.fetchFriendships()
    .then((friendships) =>
      dispatch(receiveFriendships(friendships))
    )
)
