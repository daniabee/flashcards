const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turnCount = 0;
    this.currentCard = this.deck.cards[this.turnCount];
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    const turn1 = new Turn(guess, this.returnCurrentCard());
    this.turnCount++;
    if (!turn1.evaluateGuess()) {
      this.incorrectGuesses.push(turn1.flashCard.id);
    }
    this.currentCard = this.deck.cards[this.turnCount];
    return turn1.giveFeedback();
  }

  calculatePercentCorrect() {
    let correct = this.turnCount - this.incorrectGuesses.length;
    return (correct / this.turnCount) * 100;
  }

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }
}

module.exports = Round;
