import { Bot } from '../../app/components/bot.jsx';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { markTile } from '../../app/actions/index';
import React from 'react';
import jsdom from 'jsdom';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView

describe("<Bot/>", () => {

  it("should mark 2 for the win", () => {
    let squares = ["o", "o", undefined, "x", "x", ...Array(4)]
    const bot = mount(<Bot squares={squares} victory={false} current_player="x" markTile={markTile} />)
    bot.setProps({current_player: 'o'})
    expect(bot.nodes[0].best_choice).to.equal(2)
  })

  it("should mark 2 to prevent loss", () => {
    let squares = ["x", "x", undefined, "o", undefined, undefined, "o", ...Array(2)]
    const bot = mount(<Bot squares={squares} victory={false} current_player="x" markTile={markTile} />)
    bot.setProps({current_player: 'o'})
    expect(bot.nodes[0].best_choice).to.equal(2)
  })
})
