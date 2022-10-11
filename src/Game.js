const data = require("./data");
const Round = require("./Round");
const Deck = require("./Deck");
const Card = require("./Card");
const prototypeQuestions = data.prototypeData;
const util = require("./util");

class Game {
  constructor(data = prototypeQuestions) {
    this.currentRound = null;
    this.deck = null;
    this.data = data;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }

  printQuestion(round) {
    util.main(round);
  }

  makeCards() {
    const cardDeck = this.data.map((questionData) => {
      return new Card(
        questionData.id,
        questionData.question,
        questionData.answers,
        questionData.correctAnswer
      );
    });
    return cardDeck;
  }

  makeDeck() {
    this.deck = new Deck(this.makeCards());
    return this.deck;
  }

  makeRound() {
    this.currentRound = new Round(this.makeDeck());
    return this.currentRound;
  }

  start() {
    this.makeRound();
    this.printMessage(this.makeDeck(), this.makeRound());
    this.printQuestion(this.makeRound());
  }
}

module.exports = Game;
