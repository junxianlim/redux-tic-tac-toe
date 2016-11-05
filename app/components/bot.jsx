import React, { Component } from 'react';
import { connect } from 'react-redux';
import { markTile } from '../actions/index';
import TicTac from '../tictac/index';

export class Bot extends Component {
  constructor(props) {
    super(props);
    // this.state = { current_player: props.current_player }
    this.current_player = undefined;
    this.best_choice = undefined;
  }

  componentWillReceiveProps(nextProps) {
    const { squares, current_player, victory } = nextProps;
    this.current_player = current_player;

    if (current_player == 'o' && !victory) {
      this.minimax(squares, current_player, 0);
      this.props.markTile(current_player, this.best_choice);
    }
  }

  switchPlayer(player) {
    return player == 'x' ? 'o' : 'x';
  }

  minimax(squares, player, depth) {

    if (TicTac.checkWinner(squares)) {
      switch(TicTac.checkWinner(squares)) {
      case this.current_player:
        return 10 - depth;
      case this.switchPlayer(this.current_player):
        return depth - 10;
      default:
        return 0;
      }
    }

    let scores = [];
    let moves = [];
    depth +=1;

    for(let [index, square] of squares.entries()) {
      if (square === undefined) {
        let cloned_squares = squares.slice();
        cloned_squares[index] = player;
        scores.push(this.minimax(cloned_squares, this.switchPlayer(player), depth));
        moves.push(index);
      }
    }

    if (this.current_player == player) {

      let max_score = Math.max(...scores);
      this.best_choice = moves[scores.indexOf(max_score)];
      return max_score;

    } else {

      let min_score = Math.min(...scores);
      this.best_choice = moves[scores.indexOf(min_score)];
      return min_score;
    }
  }

  render() {
    return null;
  }
}

function mapStateToProps(state) {
  return {
    squares: state.game.squares,
    current_player: state.players.current_turn,
    victory: state.game.victory
  }
};

export default connect(mapStateToProps, { markTile })(Bot);
