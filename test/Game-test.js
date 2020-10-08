const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');
const Data = require('../src/data');

describe('Game', function() {

  it('should create a deck', function() {
    let game = new Game();

    let newGame = game.start();

    expect(game.deck.cards.length).to.equal(30);
  })
})
