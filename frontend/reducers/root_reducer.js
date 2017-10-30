import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ErrorReducer from './error_reducer';
import UserProfileReducer from './user_profile_reducer';
import ModalReducer from './modal_reducer';
import FriendshipReducer from './friendship_reducer';

export default combineReducers({
  session: SessionReducer,
  error: ErrorReducer,
  profile: UserProfileReducer,
  modal: ModalReducer,
  friendships: FriendshipReducer,
})
