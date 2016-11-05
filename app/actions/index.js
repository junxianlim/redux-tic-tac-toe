'use strict';

const MARK_TILE = 'MARK_TILE';

export function markTile(player, key) {
  return {
    type: MARK_TILE,
    payload: { player: player, key: key }
  }
}
