'use strict';

import TicTac from '../tictac/index';

const INITIAL_STATE = { squares: Array(9), victory: false, history: [] };
const MARK_TILE = 'MARK_TILE';

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case MARK_TILE: {

    let squares = [...state.squares.slice(0, action.payload.key), action.payload.player, ...state.squares.slice(action.payload.key + 1)]
    let history = [...state.history, action.payload.key]

    return { ...state, squares: squares, history: [...history, action.payload.key], victory: TicTac.checkWinner(squares), history: history }
  }
  default:
    return state;
  }
}
