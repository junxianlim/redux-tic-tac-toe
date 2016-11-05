'use strict';

const MARK_TILE = 'MARK_TILE';
const NEW_GAME = 'NEW_GAME';
const UNDO_MOVE = 'UNDO_MOVE';

export function markTile(player, key) {
  return {
    type: MARK_TILE,
    payload: { player: player, key: key }
  }
}

export function newGame(player) {
  return {
    type: NEW_GAME,
    payload: { player: player }
  }
}
