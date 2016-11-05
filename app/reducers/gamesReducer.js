'use strict';

import TicTac from '../tictac/index';

const INITIAL_STATE = { squares: Array(9), victory: false };
const MARK_TILE = 'MARK_TILE';
const NEW_GAME = 'NEW_GAME';
const UNDO_MOVE = 'UNDO_MOVE';

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case MARK_TILE:
    let squares = [...state.squares.slice(0, action.payload.key), action.payload.player, ...state.squares.slice(action.payload.key + 1)]

    return { ...state, squares: squares, victory: TicTac.checkWinner(squares) }
  case NEW_GAME:
    return { ...state, ...INITIAL_STATE }
  default:
    return state;
  }
}
