const btnReloadGame = document.getElementById('relod__btn');
const space = 32;
const startGame = document.getElementById('start__btn');
const input = document.getElementById('input');
const warningActive = document.getElementById('warning-active');
const formRegistration = document.getElementById('form__registration');
const gap = 90;
let score = 0;

const resultPlayer = { name: 0,
score: 0 };
const arr = [];

// search tag canvas and determenid a way to work with it 
let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");

// added image and audio for game 
let bird = new Image();
let background = new Image();
let pipeTop = new Image();
let pipeBottom = new Image();
let earth = new Image();

bird.src = "assets/img/bird.png";
background.src = "assets/img/background.png";
pipeTop.src = "assets/img/pipeTop.png";
pipeBottom.src = "assets/img/pipeBottom.png";
earth.src = "assets/img/earth.png";

// added sound file
let fly = new Audio();
let scoreAudio = new Audio();

fly.src = "assets/audio/fly.mp3"
scoreAudio.src = "assets/audio/score.mp3"
//click for keybord

document.addEventListener("keydown", moveUp);

function moveUp() {
    yPos -= 35;
    fly.play();
}

//create block
let pipe = [];
pipe[0] = {
    x: cvs.width,
    y: 0
}


//position bird
let xPos = 10;
let yPos = 150;
let grav = 1.5;

function gameOver() {
    document.getElementById('game__over').style.opacity = 0;
}

function reloadGame() {
    location.reload();
}

function draw() {
    ctx.drawImage(background, 0, 0);

    for (let i = 0; i < pipe.length; i++) {
        ctx.drawImage(pipeTop, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeTop.height + gap)

        pipe[i].x--;

        if (pipe[i].x == 125) {
            pipe.push({
                x: cvs.width,
                y: Math.floor(Math.random() * pipeTop.height) - pipeTop.height
            });
        }

        if (xPos + bird.width >= pipe[i].x
            && xPos <= pipe[i].x + pipeTop.width
            && (yPos <= pipe[i].y + pipeTop.height
                || yPos + bird.height >= pipe[i].y + pipeTop.height + gap)
            || yPos + bird.height >= cvs.height - earth.height) {

            gameOver();
            btnReloadGame.style.opacity = 1;
            e.preventDefault();
        }

        if (pipe[i].x == 5) {
            score++;
            scoreAudio.play();
            arr.push(score)
            // localStorage.setItem('point', score)
        }

    }

    ctx.drawImage(earth, 0, cvs.height - earth.height);
    ctx.drawImage(bird, xPos, yPos);


    yPos += grav;

    ctx.fillStyle = "#000";
    ctx.font = "24px Verdana";
    ctx.fillText("Score: " + score, 10, cvs.height - 20);

    requestAnimationFrame(draw);
}



// earth.onload = draw;

//get started

startGame.addEventListener('click', () => {
    if (input.value == '') {
        warningActive.classList.add('warning__active')
    } else {
        formRegistration.classList.add('start_game')
        input.value == name;
        arr.push(input.value);
        console.log(arr);
        draw();
        localStorage.setItem('name', arr[0]);
    }
});

btnReloadGame.addEventListener('click', () => {
    draw();
 });

// console.log(localStorage.getItem("name"));
// console.log(localStorage.getItem("point"));

document.addEventListener("keydown", someMethod);

function someMethod() { }