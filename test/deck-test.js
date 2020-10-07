const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck();

    expect(Deck).to.be.a('function');
  })

  it('should be an instance of Deck', function() {
    const deck = new Deck();

    expect(deck).to.be.an.instanceOf(Deck);
  })

  it('should start with a deck of cards', function() {
    const card1 = new Card(1, 'What is Cooper\'s favorite animal?', ['lion', 'giraffe', 'panda'], 'panda');
    const card2 = new Card(1, 'What is is Cooper\'s favorite color?', ['red', 'white', 'blue'], 'blue');
    const card3 = new Card(1, 'What is is Cooper\'s favorite food?', ['sushi', 'burritos', 'both'], 'both');

    const deck = new Deck([card1, card2, card3]);

    expect(deck.cards).deep.equal([card1, card2, card3]);
  })

  it('should be able to count cards', function() {
    const card1 = new Card(1, 'What is Cooper\'s favorite animal?', ['lion', 'giraffe', 'panda'], 'panda');
    const card2 = new Card(1, 'What is is Cooper\'s favorite color?', ['red', 'white', 'blue'], 'blue');
    const card3 = new Card(1, 'What is is Cooper\'s favorite food?', ['sushi', 'burritos', 'both'], 'both');

    const deck = new Deck([card1, card2, card3]);

    deck.countCards();

    expect(deck.cards).deep.equal([card1, card2, card3]);
    expect(deck.countCards()).to.equal(3);
  })

})
