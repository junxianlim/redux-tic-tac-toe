import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Square } from '../../app/components/square.jsx';
import { markTile } from '../../app/actions/index';

describe("<Square/>", () => {
  const square = shallow(<Square squares={Array(9)} id={1} markTile={markTile} current_player='x' victory={false} />);

  it("renders component", () => {
    expect(square).to.exist;
  })
})

describe("Player marks x", () => {
  let squares = [undefined, 'x', Array(7) ]
  const square = shallow(<Square squares={squares} id={1} markTile={markTile} current_player='x' victory={false} />);

  it("marks square with x", () => {
    expect(square.find('div').text()).to.equal('x');
  })
})

describe("Player marks o", () => {
  let squares = [undefined, 'o', Array(7) ]
  const square = shallow(<Square squares={squares} id={1} markTile={markTile} current_player='x' victory={false} />);

  it("marks square with o", () => {
    expect(square.find('div').text()).to.equal('o');
  })
})
