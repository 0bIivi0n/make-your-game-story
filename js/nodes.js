const canvas = document.getElementById("canvas");
const pauseButton = document.getElementById("toggle");
const startMenu = document.getElementById("start-menu");
const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart");
const nextLevelButton = document.getElementById("next-level-button");
const startPage = document.getElementById("start-menu");
const tryAgainButton = document.getElementById("try-again-button");
const gameOverPage = document.getElementById("game-over");
const gratsPage = document.getElementById("grats");
const playerZone = document.getElementById("player-zone");
const bottomBorder = document.getElementById("border-bottom");
const leftBorder = document.getElementById("border-left");
const rightBorder = document.getElementById("border-right");
const pauseMenu = document.getElementById("pause-menu");
const introText = document.getElementById("intro-text");
const introScreen = document.getElementById("intro");

var leftBorderLimits = leftBorder.getBoundingClientRect(leftBorder);
var rightBorderLimits = rightBorder.getBoundingClientRect(rightBorder);

var enemyContainer = document.getElementById("enemy-container");
