class Game {
  constructor() {
    this.startScreen = document.getElementById("start-screen");
    this.mainScreen = document.getElementById("main-screen");
    this.gameScreen = document.getElementById("game-screen");
    this.endScreen = document.getElementById("end-screen");

    this.height = 800;
    this.width = 600;;
    this.score = 0;
    this.countdown = 30;
    this.gameIsOver = false;
    this.gameIntervalId;
  }

  openMenu() {
    // Hide the start screen
    this.startScreen.style.display = "none";
    // Show the main screen
    this.mainScreen.style.display = "flex";
    // Hide the end screen
    this.endScreen.style.display = "none";
  }

  startGame() {
    // Hide the main screen
    this.mainScreen.style.display = "none";
    // Show the game screen
    this.gameScreen.style.display = "flex";
    // Hide the end screen
    this.endScreen.style.display = "none";

    document.getElementById("score-arcade").innerText = this.score;
    document.getElementById("time").innerText = this.countdown;
  }

  endGame() {
    // Hide the game screen
    this.gameScreen.style.display = "none";
    // Show the end screen
    this.endScreen.style.display = "flex";
  }
}