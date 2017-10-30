import merge from 'lodash/merge';

import { RECEIVE_FRIENDSHIPS } from '../actions/friendship_actions';

const defaultState = Object.freeze({
  entities: {}
});

const FriendshipReducer = (state = defaultState, action) => {
  Object.freeze(state)

  switch(action.type) {
    case RECEIVE_FRIENDSHIPS:
      const friendships = action.friendships;
      return merge({}, defaultState, {
        entities: friendships
      });
      break;

    default:
      return state;
  }
};

export default FriendshipReducer;
