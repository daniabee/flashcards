const chai = require("chai");
const expect = chai.expect;

const Round = require("../src/Round");
const Deck = require("../src/Deck");
const Card = require("../src/Card");
const Turn = require("../src/Turn");

describe("Round", function () {
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

  const deck = new Deck([card1, card2, card3]);
  const round = new Round(deck);

  beforeEach(function () {
    expect(round.turnCount).to.equal(0);
    expect(round.currentCard).to.equal(card1);
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it("should be able to return the current card", function () {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it("should change the turn count and current card when a turn is taken", function () {
    after(function () {
      round.takeTurn("sea otter");
      round.takeTurn("boop");
      expect(round.turnCount).to.equal(2);
      expect(round.currentCard).to.equal(card3);
    });
  });

  it("should tell user if guess is correct or incorrect", function () {
    after(function () {
      round.currentCard = card1;
      expect(round.takeTurn("sea otter")).to.equal("correct!");
      expect(round.incorrectGuesses.length).to.equal(1);
    });
  });

  it("should calculate percent correct", function () {
    after(function () {
      expect(round.calculatePercentCorrect()).to.equal(66.66666666666666);
    });
  });
  it("should end the round", function () {
    after(function () {
      expect(round.endRound()).to.equal(
        "** Round over! ** You answered 66.66666666666666% of the questions correctly!"
      );
    });
  });
});
