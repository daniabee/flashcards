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

describe("Round", function () {
  it("should return the current card", function () {
    const round0 = new Round(deck1);
    expect(round0.returnCurrentCard()).to.deep.equal(card1);
  });
  it("should update the turn count", function () {
    const round1 = new Round(deck1);
    expect(round1.turnCount).to.equal(0);
    round1.takeTurn("sea otter");
    round1.takeTurn("boop");
    expect(round1.turnCount).to.equal(2);
  });
  it("should update the current card", function () {
    const round2 = new Round(deck1);
    expect(round2.currentCard).to.equal(card1);
    round2.takeTurn("sea otter");
    expect(round2.currentCard).to.equal(card2);
  });
  it("should tell user if guess is correct or incorrect", function () {
    const round3 = new Round(deck1);
    expect(round3.takeTurn("sea otter")).to.equal("correct!");
    expect(round3.takeTurn("nope")).to.equal("incorrect!");
  });
  it("should save id of incorrectly guessed cards", function () {
    const round4 = new Round(deck1);
    round4.takeTurn("haha");
    round4.takeTurn("nope");
    expect(round4.incorrectGuesses.length).to.equal(2);
  });
  it("should calculate percent correct", function () {
    const round5 = new Round(deck1);
    round5.takeTurn("sea otter");
    round5.takeTurn("nope");
    expect(round5.calculatePercentCorrect()).to.equal(50);
  });
  it("should end the round", function () {
    const round6 = new Round(deck1);
    round6.takeTurn("sea otter");
    round6.takeTurn("nope");
    expect(round6.endRound()).to.equal(
      "** Round over! ** You answered 50% of the questions correctly!"
    );
  });
});
