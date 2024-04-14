// change the main screen
const startScreen = document.getElementById("start-screen");

window.onload = function () {
  startScreen.addEventListener("click" , function () {
    showMainSreen();
})}

function showMainSreen() {
  console.log("Open the main screen");
  new Game().start();
}