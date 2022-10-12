const data = require("./data");
const Round = require("./Round");
const Deck = require("./Deck");
const Card = require("./Card");
const prototypeQuestions = data.prototypeData;
const starWarsQuestions = data.starWarsData;
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
    const cardDeck = this.data.map((dataPoint) => {
      return new Card(
        dataPoint.id,
        dataPoint.question,
        dataPoint.answers,
        dataPoint.correctAnswer
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
    // this.makeRound();
    this.printMessage(this.makeDeck(), this.makeRound());
    this.printQuestion(this.makeRound());
  }
}

module.exports = Game;
