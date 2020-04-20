var numOfDrumBtns = document.querySelectorAll(".drum").length;

// Detecting Button Press
for (var i = 0; i < numOfDrumBtns; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", btnSwitcher);
}

function btnSwitcher() {
  var btnSwitch = this.innerHTML;
  switch (btnSwitch) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    default:
      console.log();
  }
}

// Detecting Keyboard Press
document.addEventListener("keydown", function (keyEvent) {
  keySwitcher(keyEvent.code);
});

function keySwitcher(keyEvent) {
  switch (keyEvent) {
    case "KeyW":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "KeyA":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "KeyS":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "KeyD":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "KeyJ":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "KeyK":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "KeyL":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    default:
      console.log();
  }
}
