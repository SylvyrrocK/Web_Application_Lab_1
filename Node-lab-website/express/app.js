const text = document.querySelector(".fancy");
const strText = text.textContent;
const splitText = strText.split("");
texe.textcontent = "";
for (let i =0; i < splitText.length; i++){
    text.innerHTML+="<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade')
    char++
    if(char === splitText.length){
        OfflineAudioCompletionEvent()
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}

var i = 0;
    var txt = "We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    var speed = 50;
    
    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }

    $(document).ready(function(){
        $(".btn1").click(function(){
          $("p").fadeOut(1000);
        });
        $(".btn2").click(function(){
          $("p").fadeIn(1000);
        });
      });