import merge from 'lodash/merge';

import { RECEIVE_SESSION_ERRORS,
         RECEIVE_USER_PROFILE_ERRORS
       } from '../actions/session_actions';

const defaultState = Object.freeze({
  entities: []
});

const ErrorReducer = (state = defaultState, action) => {
  Object.freeze(state)
  let errors;
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      errors = action.errors;

      return Object.assign({}, defaultState, {
        entities: errors
      });
      break;
    case RECEIVE_USER_PROFILE_ERRORS:
      errors = action.errors;

      return Object.assign({}, defaultState, {
        entities: errors
      });
      break;
    default:
      return state;
  }
};

export default ErrorReducer;
