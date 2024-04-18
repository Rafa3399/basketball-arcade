
const startScreen = document.getElementById("start-screen");
const startButton = document.getElementById("start-button");
const gameScreen = document.getElementById("game-screen");
const restartButton = document.getElementById("restart-button");
const menuButton = document.getElementById("menu-button");
let myBar = document.getElementById("bar");

// change screens
window.onload = function () {
  startScreen.addEventListener("click" , function () {
    showMainScreen();
  })
  startButton.addEventListener("click" , function () {
    startGame();
  })
  restartButton.addEventListener("click" , function () {
    startGame();
  })
  menuButton.addEventListener("click" , function () {
    showMainScreen();
  })}

function showMainScreen() {
  console.log("Open the main screen");
  new Game().openMenu();
}

function startGame(){
  console.log("Starting game");
  new Game().startGame();
  gameLoop()
}

// Game loop
function gameLoop() {
  let points = 0;
  let remainingTime = document.getElementById("time").innerText;
  // Countdown
  const timer = setInterval(() => {
    remainingTime--
    document.getElementById("time").textContent = remainingTime;
    console.log(remainingTime)
    if (remainingTime === 0) {
      clearInterval(timer)
      new Game().endGame();
      console.log('End!')
    }
  }, 1000);
  // Bar movement
  intervalBar();
  // Score
  gameScreen.addEventListener("click" , function () {
    width = myBar.style.width
    console.log(width)
      if (width > "44%" && width < "56%"){
        points++
        console.log('Perfect shoot! Points:', points);
      }
      else if (width < "45%" && width > "34%"){
        console.log('Good shoot! Points:', points);
      }
      else if (width < "64%" && width > "55%"){
        console.log('Good shoot! Points:', points);
      }
      else{
        console.log('Missed shoot! Points:', points);
      }
     intervalBar();
  })
}

function intervalBar (){
  let width = 1;
  let fullBar = 0;
  const interval = setInterval(function () {
    if (width === 100 && fullBar === 0) {
      fullBar = 1;
    } 
    else if (width === 0 && fullBar === 1) {
      fullBar = 0;
    } 
    else if (fullBar === 0) {
      width++;
      myBar.style.width = width + '%';
    }
    else if (fullBar === 1) {
      width--;
      myBar.style.width = width + '%';
    }
    gameScreen.addEventListener("click" , function () {
      clearInterval(interval);
    })
  }, 15);
} 