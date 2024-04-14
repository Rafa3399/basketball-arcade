// change the main screen


window.onload = function () {
  document.addEventListener("click", function () {
    showMenu();
})}

function showMenu() {
  console.log("Open the main screen");
  new Game().start();
}