
var button = document.querySelectorAll(".drum").length;

for (let i = 0; i < button; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var click = this.innerHTML;

        makesound(click);
        buttonAnimation(click);
    });
}

document.addEventListener("keypress", function (event) {
    makesound(event.key);
    buttonAnimation(event.key);
})



function makesound(key) {
    switch (key) {
        case 'W':
        case 'w': var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'A':
        case 'a': var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case 'S':
        case 's': var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'D':
        case 'd': var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case 'J':
        case 'j': var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case 'K':
        case 'k': var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case 'L':
        case 'l': var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
    }
}


function buttonAnimation(currentkey) {

    var active = document.querySelector("." + currentkey);
    active.classList.add("pressed");

    setTimeout(function () {
        active.classList.remove("pressed");
    }, 100);
}

const func = () => {
    console.log("Helloworld");
}