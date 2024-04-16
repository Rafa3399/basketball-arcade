
const startScreen = document.getElementById("start-screen");
const startButton = document.getElementById("start-button");

// change to the main screen
window.onload = function () {
  startScreen.addEventListener("click" , function () {
    showMainScreen();
  })
  startButton.addEventListener("click" , function () {
    startGame();
  }
)}

function showMainScreen() {
  console.log("Open the main screen");
  new Game().openMenu();
}

function startGame(){
  console.log("Starting game");
  new Game().startGame();
  barMove()
}

function barMove() {
  let myBar = document.getElementById("bar");
  let width = 1;
  let fullBar = 0;
  if (fullBar === 0){
    const intervalUp = setInterval(function () {
      if (width === 100) {
        fullBar = 1;
        clearInterval(intervalUp);
      } 
      else if (fullBar === 0) {
        width++;
        myBar.style.width = width + '%';
        console.log(width);
      }}, 15);
  }
  else {
    const intervalDown = setInterval(function () {
      if (width === 0) {
        fullBar = 0;
        clearInterval(intervalDown);
      } 
      else if (fullBar === 1) {
      width--;
      myBar.style.width = width + '%';
      console.log(width);
    }}, 15);
  }
}