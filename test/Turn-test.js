const chai = require("chai");
const expect = chai.expect;
const Deck = require("../src/Deck");
const Card = require("../src/Card");
const Turn = require("../src/Turn");

var card1 = new Card(
  1,
  "What is Robbie's favorite animal",
  ["sea otter", "pug", "capybara"],
  "sea otter"
);
var turn1 = new Turn("sea otter", card1);

describe("Turn", function () {
  it("should take in a guess and return that guess", function () {
    expect(turn1.returnGuess()).to.equal("sea otter");
  });
  it("should take in a card and return that card", function () {
    expect(card1).to.be.an.instanceof(Card);
    expect(turn1.returnCard()).to.equal(card1);
  });
  it("should evaluate guesses as true", function () {
    expect(turn1.evaluateGuess()).to.equal(true);
  });
  it("should evaluate guesses as false", function () {
    const turn2 = new Turn("pumpkin", card1);
    expect(turn2.evaluateGuess()).to.equal(false);
  });
  it("should give feedback", function () {
    expect(turn1.giveFeedback()).to.equal("correct!");
    const turn2 = new Turn("pumpkin", card1);
    expect(turn2.giveFeedback()).to.equal("incorrect!");
  });
});
