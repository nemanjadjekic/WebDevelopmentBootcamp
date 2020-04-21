var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var gameStarted = false;
var level = 0;

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});

$(document).keypress(function () {
  if (!gameStarted) {
    $("#level-title").html("Level " + level);
    nextSequence();
    gameStarted = true;
  }
});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColors[randomNumber];

  gamePattern.push(randomChosenColour);

  $("." + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);

  $("#level-title").html("Level " + level);
  level++;
  console.log(gamePattern);
}

function playSound(name) {
  switch (name) {
    case "red":
      var red = new Audio("sounds/red.mp3");
      red.play();
      break;

    case "green":
      var green = new Audio("sounds/green.mp3");
      green.play();
      break;

    case "blue":
      var blue = new Audio("sounds/blue.mp3");
      blue.play();
      break;

    case "yellow":
      var yellow = new Audio("sounds/yellow.mp3");
      yellow.play();
      break;

    default:
      console.log();
  }
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("True!");
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
        console.log("True Length!");
      }, 1000);
    }
  } else {
    console.log("False!");
  }
}
