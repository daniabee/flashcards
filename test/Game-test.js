const chai = require("chai");
const expect = chai.expect;

const Game = require("../src/Game");

describe("Game", function () {
  let game = new Game();
  beforeEach(() => {
    const dataSet = [
      {
        id: 1,
        question: "What is Robbie's favorite animal",
        answers: ["sea otter", "pug", "capybara"],
        correctAnswer: "sea otter",
      },
      {
        id: 14,
        question: "What organ is Khalid missing?",
        answers: ["spleen", "appendix", "gallbladder"],
        correctAnswer: "gallbladder",
      },
      {
        id: 12,
        question: "What is Travis's favorite stress reliever?",
        answers: [
          "listening to music",
          "watching Netflix",
          "playing with bubble wrap",
        ],
        correctAnswer: "playing with bubble wrap",
      },
    ];
    let game = new Game(dataSet);
  });

  it("should be an instance of Game", function () {
    expect(game).to.be.an.instanceof(Game);
  });

  it("should create a deck of cards and a roundobj", function () {
    game.createCards();
    game.createDeck();
    game.createRound();
    expect(game.deck).to.not.equal(null);
    expect(game.currentRound).to.not.equal(null);
  });
});
