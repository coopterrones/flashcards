const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turnCount = 0
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[0];
  }

  takeTurn(guess) {
    let newTurn = new Turn(guess, this.returnCurrentCard());
    this.turnCount++;
    if (newTurn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.returnCurrentCard().id)
    }

    this.deck.shift();

    return (newTurn.giveFeedback());
  }

  calculatePercentageCorrect() {
    let correctGuesses = this.turnCount - this.incorrectGuesses.length;
    let total = this.turnCount;
    let percentageCorrect = (correctGuesses / total) * 100;
    let rounded = Math.round(percentageCorrect);
    return rounded
  }

  endRound() {
    console.log(`**Round over! You answered ${this.calculatePercentageCorrect()}% of the questions correctly!`);
  }
}

module.exports = Round;
