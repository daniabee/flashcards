const data = require("./src/data");
const prototypeQuestions = data.prototypeData;
const starWarsQuestions = data.starWarsData;
const Game = require("./src/Game");

const newGame = new Game(starWarsQuestions);
newGame.start();

console.log("Your project is running...");
