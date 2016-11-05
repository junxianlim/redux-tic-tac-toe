import React from 'react';
import Square from './square.jsx';
import Bot from './bot.jsx';
import { connect } from 'react-redux';


function Main({victory}) {
  const squares = [...Array(9).keys()]

  function displayWinner() {
    if (victory) {
      if (victory == 'tie') {
        return <div className='victory-message'>It's a {victory} </div>
      }
      return <div className="victory-message">Player {victory} has won</div>
    }
  }

  return (
    <div>
      <div className="game">
        <h1> Tic Tac Toe </h1>
        <div className="board">
          {
            squares.map((key) => {
              return <Square key={key} id={key}/>
            })
          }
        </div>
      </div>
      { displayWinner() }
      <Bot />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    victory: state.game.victory
  }
}

export default connect(mapStateToProps)(Main)
