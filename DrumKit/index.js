var numOfDrumBtns = document.querySelectorAll(".drum").length;

var audio_test = new Audio('sounds/tom-1.mp3');

for (var i=0; i<numOfDrumBtns; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        audio_test.play();
      });
}

