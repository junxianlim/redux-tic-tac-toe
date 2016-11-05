import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Square from '../../app/components/square.jsx'

describe("<Square/>", () => {
  const square = shallow(<Square/>);

  it("renders component", () => {
    expect(square).to.exist
  })
})

describe("Player marks square", () => {
  const player = 'x'
  const square = shallow(<Square player={player} />);

  it("marks component with x", () => {
    expect(square.contains(<div>x</div>)).to.equal(true)
  })
})
