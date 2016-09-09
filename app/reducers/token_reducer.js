const INITIAL_STATE = null;
const REGISTER_USER = 'REGISTER_USER';
const LOGIN_USER = 'LOGIN_USER';

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case REGISTER_USER:
    return action.payload
  case LOGIN_USER:
    return action.payload
  default:
    return state
  }
}
