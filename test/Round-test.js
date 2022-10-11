const chai = require("chai");
const expect = chai.expect;

const Round = require("../src/Round");
const Deck = require("../src/Deck");
const Card = require("../src/Card");
const Turn = require("../src/Turn");

const card1 = new Card(
  1,
  "What is Robbie's favorite animal",
  ["sea otter", "pug", "capybara"],
  "sea otter"
);
const card2 = new Card(
  14,
  "What organ is Khalid missing?",
  ["spleen", "appendix", "gallbladder"],
  "gallbladder"
);
const card3 = new Card(
  12,
  "What is Travis's middle name?",
  ["Lex", "William", "Fitzgerald"],
  "Fitzgerald"
);

var deck1 = new Deck([card1, card2, card3]);

round1 = new Round(deck1);

describe("Round", function () {
  it("should return the current card", function () {
    expect(round1.returnCurrentCard()).to.deep.equal(card1);
  });
  it("should take a turn", function () {
    expect(round1.turnCount).to.equal(0);
    expect(round1.currentCard).to.equal(card1);
    expect(round1.takeTurn("sea otter")).to.equal("correct!");
    expect(round1.currentCard).to.equal(card2);
    expect(round1.takeTurn("nope")).to.equal("incorrect!");
    expect(round1.incorrectGuesses.length).to.equal(1);
    expect(round1.turnCount).to.equal(2);
  });
  it("should calculate percent correct", function () {
    expect(round1.calculatePercentCorrect()).to.equal(50);
  });
  it("should end the round", function () {
    expect(round1.endRound()).to.equal(
      "** Round over! ** You answered 50% of the questions correctly!"
    );
  });
});
