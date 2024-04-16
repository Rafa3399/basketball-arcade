class Game {
  constructor() {
    this.startScreen = document.getElementById("start-screen");
    this.mainScreen = document.getElementById("main-screen");
    this.gameScreen = document.getElementById("game-screen");
    this.height = 800;
    this.width = 600;
    this.obstacles = [];
    this.score = 0;
    this.countdown = 30000; // 30 seconds
    this.gameIsOver = false;
    this.gameIntervalId;
  }

  openMenu() {
    // Hide the start screen
    this.startScreen.style.display = "none";

    // Show the main screen
    this.mainScreen.style.display = "flex";
  }

  startGame() {
    // Occult the main screen
    this.mainScreen.style.display = "none";
    // Show the game screen
    this.gameScreen.style.display = "block";
  }
}