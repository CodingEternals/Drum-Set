var numberOfDrumButtons = document.querySelectorAll('.drum').length;
// this will detect button press
for(var i = 0; i < numberOfDrumButtons; i++){

  document.querySelectorAll('.drum')[i].addEventListener('click', function(){

    var innerHTMLButton = this.innerHTML;
    makeSound(innerHTMLButton);
    buttonAmination(innerHTMLButton);
    
});
}
// this will dectect key press
document.addEventListener("keydown",function(event){
    makeSound(event.key.toLowerCase());
    buttonAmination(event.key.toLowerCase());
});

function makeSound(key){
    switch (key) {
        case 'w':
          var audio = new Audio('sounds/crash.mp3');
          audio.play();
          break;
          
        case 'a':
          var audio = new Audio('sounds/kick-bass.mp3');
          audio.play();
          break;
        
        case 's' :
          var audio = new Audio('sounds/snare.mp3');
          audio.play();
          break;
  
        case 'd':
          var audio = new Audio('sounds/tom-1.mp3');
          audio.play();
          break;
  
        case 'j':
          var audio = new Audio('sounds/tom-2.mp3');
          audio.play();
          break;
  
          case 'k':
          var audio = new Audio('sounds/tom-3.mp3');
          audio.play();
          break;
  
        case 'l':
          var audio = new Audio('sounds/tom-4.mp3');
          audio.play();
          break;
  
        default:
          break;
      }
  
}

function buttonAmination(currentkey){
  
    var activeEvent = document.querySelector("."+currentkey);
    activeEvent.classList.add("pressed");

    setTimeout(function(){
        activeEvent.classList.remove("pressed");
    }, 100);
}
