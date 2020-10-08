const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');

class Game {
  constructor() {
    this.currentRound;
    this.deck;
  }

  start() {
    let cards = [];
    prototypeQuestions.forEach(card => {

      let newCard = new Card(card['id'], card['question'], card['answers'], card['correctAnswer']);
      cards.push(newCard);
      this.deck = new Deck(cards);
    });

    this.currentRound = new Round(this.deck);
    this.printMessage(this.deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }

  printMessage(deck) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
