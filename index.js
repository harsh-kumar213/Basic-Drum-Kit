// applying event listener to all the buttons

var i = 0;
var n = document.querySelectorAll(".set .drum").length;
while(i<n){
document.querySelectorAll(".set .drum")[i].addEventListener("click", onclick);
i++;
}

//  function to be called when event is triggered
function onclick(){
    var key = this.innerHTML;
    makeSound(key);
    animation(key);
}

// fuction to be called for making sound

function makeSound(pressedButton)
{
    
   switch(pressedButton){
    case "w":
        var tom1 = new Audio('/sounds/tom-1.mp3')
             tom1.play();
             break;
    case "a":
        var tom2 = new Audio('/sounds/tom-2.mp3')
            tom2.play();
              break;

    case "s":
        var tom3 = new Audio('/sounds/tom-3.mp3')
            tom3.play();
               break;

    case "d":
        var tom4 = new Audio('/sounds/tom-4.mp3')
            tom4.play();
                break;

     case "j":
        var snare = new Audio('/sounds/snare.mp3')
            snare.play();
                break;

     case "k":
        var crash = new Audio('/sounds/crash.mp3')
            crash.play();
                break;
                                             
     case "l":
        var kick = new Audio('/sounds/kick-bass.mp3')
             kick.play();
                break;

      default: console.log(pressedButton);                                      

   }
}

// adding eventListener for keyboard keys presses

document.addEventListener("keydown", function(event){
    var keyBoardButton = event.key;
    makeSound(keyBoardButton);
    animation(keyBoardButton);
});



// adding animations

function animation(currentkey){
     document.querySelector("."+ currentkey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+ currentkey).classList.remove("pressed")
    },100)
}


