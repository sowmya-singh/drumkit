
var n=document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      var btn=this.innerHTML;
      makesound(btn);
       animation_btn(btn);

});

}

document.addEventListener("keypress",function(event)
{
  makesound(event.key);
   animation_btn(event.key);

});
function makesound(key)
{
  switch(key)
  {
    case "w": var tom1=new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
    case "a": var tom2=new Audio("sounds/tom-2.mp3");
                            tom2.play();
                            break;
    case "s": var tom3=new Audio("sounds/tom-3.mp3");
                                        tom3.play();
                                        break;
    case "d": var tom4=new Audio("sounds/tom-4.mp3");
                    tom4.play();
                        break;
    case "j": var crash=new Audio("sounds/crash.mp3");
                                        crash.play();
                                            break;
    case "k": var kick=new Audio("sounds/kick-bass.mp3");
                                    kick.play();
                                      break;
    case "l": var snare=new Audio("sounds/snare.mp3");
                              snare.play();
                                break;

     default:console.log(btn);
     break;
  }
}
function animation_btn(cur_key)
{
  var active_btn=document.querySelector("."+cur_key);
  active_btn.classList.add("pressed");
  setTimeout(function(){
    active_btn.classList.remove("pressed");
  },100);

}
