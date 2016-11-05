import TicTac from '../../app/tictac/index';
import { expect } from 'chai';

describe("TicTac should detect game end", () => {
  it("should return false", () => {
    let squares = ["x", "x", ...Array(7)]
    expect(TicTac.checkWinner(squares)).to.equal(false)
  })

  it("should return x as winner", () => {
    let squares = ["x", "x", "x", Array(6)]
    expect(TicTac.checkWinner(squares)).to.equal("x")
  })

  it("should return o as winner", () => {
    let squares = ["o", "o", "o", Array(6)]
    expect(TicTac.checkWinner(squares)).to.equal("o")
  })

  it("should return a tie", () => {
    let squares = ["x", "o", "x", "o", "o", "x", "x", "x", "o"]
    expect(TicTac.checkWinner(squares)).to.equal("tie")
  })
})

describe("TicTac should detect squares occupancy", () => {
  it("should return false if squares available", () => {
    let squares = Array(9)
    expect(TicTac.allSquaresOccupied(squares)).to.equal(false)
  })

  it("should return true if squares occupied", () => {
    let squares = ["x", "o", "x", "o", "o", "x", "x", "x", "o"]
    expect(TicTac.allSquaresOccupied(squares)).to.equal(true)
  })
})
