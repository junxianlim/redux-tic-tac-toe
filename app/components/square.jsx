import React from 'react';
import { connect } from 'react-redux';
import { markTile } from '../actions/index';

function Square({ id, squares, markTile, current_player, victory }) {

  function selectTile() {
    if (current_player == 'x' && !squares[id] && !victory) {
      markTile(current_player, id)
    }
  }

  function clickable() {
    if (current_player == 'x') {
      return 'clickable'
    }
  }

  return (
    <div className={clickable()} onClick={() => { selectTile() }}>{squares[id]}</div>
  )
}

function mapStateToProps(state) {
  return {
    squares: state.game.squares,
    current_player: state.players.current_turn,
    victory: state.game.victory
  }
}

export default connect(mapStateToProps, { markTile })(Square)
