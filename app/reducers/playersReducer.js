'use strict';

const INITIAL_STATE = { current_turn: 'x' };
const MARK_TILE = 'MARK_TILE';
const NEW_GAME = 'NEW_GAME';
const OPPONENT = {
  'x': 'o',
  'o': 'x'
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case MARK_TILE: {
    return { ...state, current_turn: OPPONENT[action.payload.player] }
  }
  case NEW_GAME: {
    return { ...state, current_turn: action.payload.player }
  }
  default:
    return state;
  }
}
