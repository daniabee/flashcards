class Turn {
  constructor(guess, flashCard) {
    this.guess = guess;
    this.flashCard = flashCard;
  }
  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.flashCard;
  }

  evaluateGuess() {
    if (this.guess === this.flashCard.answer) {
      return true;
    } else {
      return false;
    }
  }

  giveFeedback() {
    if (this.guess) {
      return "correct!";
    } else {
      return "incorrect!";
    }
  }
}

module.exports = Turn;
