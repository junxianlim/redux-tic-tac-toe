import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import TokenReducer from './token_reducer';
import FlashMessage from './flash_message_reducer';

const rootReducer = combineReducers({
  form: formReducer,
  token: TokenReducer,
  flashMessage: FlashMessage
})

export default rootReducer
