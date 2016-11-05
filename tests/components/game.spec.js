import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { newGame } from '../../app/actions/index';
import { Game } from '../../app/components/Game.jsx'
import Square from '../../app/components/square.jsx'

describe("<Game/>", () => {
  const game = shallow(<Game newGame={newGame} victory={false}/>);

  it("renders component", () => {
    expect(game.find(Square)).to.have.length(9);
  })

  it("does not show victory message", () => {
    expect(game.find('.victory-message')).to.have.length(0);
  })
})

describe("<Game/> Over", () => {
  const game = shallow(<Game newGame={newGame} victory="x"/>);

  it("shows victory message", () => {
    expect(game.find('.victory-message')).to.have.length(1);
  })

  it("shows player x has won", () => {
    expect(game.find('.victory-message').text()).to.equal("Player x has won")
  })
})
