const INITIAL_STATE = { message: null, key: null, visible: null };
const SET_FLASH_MESSAGE = 'SET_FLASH_MESSAGE';
const HIDE_FLASH_MESSAGE = 'HIDE_FLASH_MESSAGE';

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case HIDE_FLASH_MESSAGE:
    return { ...state, message: action.payload.message, visible: action.payload.visible, key: action.payload.key }
  case SET_FLASH_MESSAGE:
    return { ...state, message: action.payload.message, visible: action.payload.visible, key: action.payload.key }
  default:
    return state
  }
}
