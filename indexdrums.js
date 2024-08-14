var drumsnum = document.querySelectorAll(".drum").length;

for(i=0;i<drumsnum;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",eventadd);
}
function eventadd()
{
   var code = this.innerHTML;
   makesound(code);
   animation(code);
   
} 

document.addEventListener("keypress",function(event) {
   makesound(event.key);
   animation(event.key);
});



function makesound(key) {
    switch (key) {
        case "w":
            var audio= new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
                var kick= new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
        case "s":
                    var snare = new Audio("sounds/snare.mp3");
                    snare.play();
                    break;
        case "d":
                        var tom1= new Audio("sounds/tom-1.mp3");
                        tom1.play();
                        break;
        case "j":
                            var tom2= new Audio("sounds/tom-2.mp3");
                            tom2.play();
                            break;
        case "k":
                                var tom3= new Audio("sounds/tom-3.mp3");
                                tom3.play();
                                break;
        case "l":
                                    var tom4= new Audio("sounds/tom-4.mp3");
                                    tom4.play();
                                    break;
        default:
            break;
            
       }
}

function animation(keycode){
    var keyy = document.querySelector("." + keycode);
    keyy.classList.add("pressed");
   setTimeout(function() {
    keyy.classList.remove("pressed");
   },200) ;

}
