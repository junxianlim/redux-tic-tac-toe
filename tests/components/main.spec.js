import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import Game from '../../app/components/Game.jsx'
import Square from '../../app/components/square.jsx'

describe("<Main/>", () => {
  const game = shallow(<Game/>);

  it("renders component", () => {
    expect(game.find(Square)).to.have.length(9);
  })
})
