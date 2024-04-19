
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
  let points = document.getElementById("score-arcade").innerText;
  let missedShots= 0;
  let remainingTime = document.getElementById("time").innerText;
  // Countdown
  const timer = setInterval(() => {
    remainingTime--
    document.getElementById("time").textContent = remainingTime;
    console.log(remainingTime)
    if (remainingTime === 0) {
      document.getElementById("score").innerText +=  points;
      document.getElementById("successful-shots").innerText +=  points;
      document.getElementById("missed-shots").innerText +=  missedShots;
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
      // 100% chance
      if (width > "44%" && width < "56%"){
        points++
        scoreAnimation();
        console.log('Perfect shoot! Points:', points);
      }
      // 50% chance
      else if (width < "45%" && width > "34%"){
        let a = Math.floor(Math.random()*10);
        if (a < 5){
          points++
          scoreAnimation();
          console.log('Good shoot! Points:', points);
        }
        else{
          missedShots++
          console.log('Missed shoot! Points:', points);
        }
      }
      // 50% chance
      else if (width < "64%" && width > "55%"){
        let a = Math.floor(Math.random()*10);
        if (a < 5){
          points++
          scoreAnimation();
          console.log('Good shoot! Points:', points);
        }
        else{
          missedShots++
          console.log('Missed shoot! Points:', points);
        }
      }
      // 0% chance
      else{
        missedShots++
        console.log('Missed shoot! Points:', points);
      }
      intervalBar()
      document.getElementById("score-arcade").innerText =  points;
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

function scoreAnimation(){
  document.getElementById("arcade").src = "/images/score.gif";
  setTimeout(() => {
    document.getElementById("arcade").src = "/images/1.gif";
  }, "300");
}