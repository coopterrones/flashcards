const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {

  it('should be an instance of Round', function() {
    const card1 = new Card(1, 'What is Cooper\'s favorite animal?', ['lion', 'giraffe', 'panda'], 'panda');
    const card2 = new Card(2, 'What is is Cooper\'s favorite color?', ['red', 'white', 'blue'], 'blue');
    const card3 = new Card(3, 'What is is Cooper\'s favorite food?', ['sushi', 'burritos', 'both'], 'both');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round).to.be.an.instanceOf(Round);
  })

  it('should initialize with a deck', function() {
    const card1 = new Card(1, 'What is Cooper\'s favorite animal?', ['lion', 'giraffe', 'panda'], 'panda');
    const card2 = new Card(2, 'What is is Cooper\'s favorite color?', ['red', 'white', 'blue'], 'blue');
    const card3 = new Card(3, 'What is is Cooper\'s favorite food?', ['sushi', 'burritos', 'both'], 'both');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.deck).to.deep.equal(deck.cards);
  })

  it('should have a top card', function() {
    const card1 = new Card(1, 'What is Cooper\'s favorite animal?', ['lion', 'giraffe', 'panda'], 'panda');
    const card2 = new Card(2, 'What is is Cooper\'s favorite color?', ['red', 'white', 'blue'], 'blue');
    const card3 = new Card(3, 'What is is Cooper\'s favorite food?', ['sushi', 'burritos', 'both'], 'both');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.deck).to.deep.equal(deck.cards);
    expect(round.returnCurrentCard()).to.deep.equal(deck.cards[0]);
  })

  it('should be able to return the current card', function() {
    const card1 = new Card(1, 'What is Cooper\'s favorite animal?', ['lion', 'giraffe', 'panda'], 'panda');
    const card2 = new Card(2, 'What is is Cooper\'s favorite color?', ['red', 'white', 'blue'], 'blue');
    const card3 = new Card(3, 'What is is Cooper\'s favorite food?', ['sushi', 'burritos', 'both'], 'both');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.returnCurrentCard();

    expect(round.returnCurrentCard()).to.equal(card1);
  })

  it('should be able to take update the turn count', function() {
    const card1 = new Card(1, 'What is Cooper\'s favorite animal?', ['lion', 'giraffe', 'panda'], 'panda');
    const card2 = new Card(2, 'What is is Cooper\'s favorite color?', ['red', 'white', 'blue'], 'blue');
    const card3 = new Card(3, 'What is is Cooper\'s favorite food?', ['sushi', 'burritos', 'both'], 'both');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn();

    expect(round.turnCount).to.equal(1);
  })

  it('should move to the next card', function() {
    const card1 = new Card(1, 'What is Cooper\'s favorite animal?', ['lion', 'giraffe', 'panda'], 'panda');
    const card2 = new Card(2, 'What is is Cooper\'s favorite color?', ['red', 'white', 'blue'], 'blue');
    const card3 = new Card(3, 'What is is Cooper\'s favorite food?', ['sushi', 'burritos', 'both'], 'both');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn();
    expect(round.returnCurrentCard()).to.equal(card2);
  })

  it('should be able to evaluate guesses', function() {
    const card1 = new Card(1, 'What is Cooper\'s favorite animal?', ['lion', 'giraffe', 'panda'], 'panda');
    const card2 = new Card(2, 'What is is Cooper\'s favorite color?', ['red', 'white', 'blue'], 'blue');
    const card3 = new Card(3, 'What is is Cooper\'s favorite food?', ['sushi', 'burritos', 'both'], 'both');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn('lion');

    expect(round.incorrectGuesses).to.deep.equal([1]);
  })

  it('should give feedback to the player if the answer is correct', function() {
    const card1 = new Card(1, 'What is Cooper\'s favorite animal?', ['lion', 'giraffe', 'panda'], 'panda');
    const card2 = new Card(2, 'What is is Cooper\'s favorite color?', ['red', 'white', 'blue'], 'blue');
    const card3 = new Card(3, 'What is is Cooper\'s favorite food?', ['sushi', 'burritos', 'both'], 'both');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    let result = round.takeTurn('panda');

    expect(result).to.equal('correct!');
  })

  it('should give feedback to the player if the answer is incorrect', function() {
    const card1 = new Card(1, 'What is Cooper\'s favorite animal?', ['lion', 'giraffe', 'panda'], 'panda');
    const card2 = new Card(2, 'What is is Cooper\'s favorite color?', ['red', 'white', 'blue'], 'blue');
    const card3 = new Card(3, 'What is is Cooper\'s favorite food?', ['sushi', 'burritos', 'both'], 'both');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    let result = round.takeTurn('lion');

    expect(result).to.equal('incorrect!');
  })

  it('should calculate the percentage of correct answers', function() {
    const card1 = new Card(1, 'What is Cooper\'s favorite animal?', ['lion', 'giraffe', 'panda'], 'panda');
    const card2 = new Card(2, 'What is is Cooper\'s favorite color?', ['red', 'white', 'blue'], 'blue');
    const card3 = new Card(3, 'What is is Cooper\'s favorite food?', ['sushi', 'burritos', 'both'], 'both');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    let resultTurnOne = round.takeTurn('panda');
    let resultTurnTwo = round.takeTurn('white');
    let resultTurnThree = round.takeTurn('both');

    let percentageCorrect = round.calculatePercentageCorrect();

    expect(percentageCorrect).to.equal(67);
  })

})
