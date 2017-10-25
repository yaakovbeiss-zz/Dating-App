import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ErrorReducer from './error_reducer';

export default combineReducers({
  session: SessionReducer,
  error: ErrorReducer,
})
