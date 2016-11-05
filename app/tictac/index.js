const WINNING_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

export default class TicTac {

  static allSquaresOccupied(squares) {
    return squares.findIndex((sq) => { return sq === undefined}) == -1
  }

  static checkWinner(squares) {
    let matching_arrays = WINNING_PATTERNS.filter((pattern)=>{
      let square1 = squares[pattern[0]]
      let square2 = squares[pattern[1]]
      let square3 = squares[pattern[2]]

      return square1 && square1 === square2 && square2 === square3
    })

    if (matching_arrays.length > 0) {
      return squares[matching_arrays[0][0]]
    }

    if (this.allSquaresOccupied(squares)) {
      return 'tie'
    }

    return false;
  }
}
