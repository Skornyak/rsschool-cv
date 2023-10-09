const btnReloadGame = document.getElementById('relod__btn');
const space = 32;
const startGame = document.getElementById('start__btn');
const input = document.getElementById('input');
const warningActive = document.getElementById('warning-active');
const formRegistration = document.getElementById('form__registration');
const gap = 90;

let score;
//create block
let pipe;

//position bird
let xPos;
let yPos;
let grav;

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
function moveUp() {
    yPos -= 35;
    fly.play();
}

document.addEventListener("keydown", function (event) {
    if (event.keyCode === 32) {
       moveUp();
    }
})

const resetStartValues = () => {
    xPos = 10;
    yPos = 150;
    grav = 1.5;
    pipe = [];
    pipe[0] = {
        x: cvs.width,
        y: 0
    }
    score = 0;
}

resetStartValues();

function gameOver() {
    document.getElementById('game__over').style.opacity = 1;
    btnReloadGame.style.opacity = 1;
}

function draw() {
    ctx.drawImage(background, 0, 0);

    let isGameOver = false;

    for (let i = 0; i < pipe.length; i++) {
        ctx.drawImage(pipeTop, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeTop.height + gap)

        pipe[i].x--;

        if (pipe[i].x === 125) {
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
            isGameOver = true;
            // e.preventDefault();
        }

        if (pipe[i].x === 5) {
            score++;
            scoreAudio.play();
            const oldScores = JSON.parse(localStorage.getItem('scores')) || [];

            const userIndex = oldScores.findIndex((user) => {
                return user.name === input.value
            })

            if (userIndex === -1) {
                const newScores = [
                    ...oldScores,
                    {
                        name: input.value,
                        score
                    }
                ].sort((a, b) => {
                    return b.score - a.score
                })
                if (newScores.length <= 10 ) {
                    localStorage.setItem('scores', JSON.stringify(newScores));
                } else {
                    localStorage.setItem('scores', JSON.stringify(newScores.slice(0, 10)));
                }


            } else {
                if (oldScores[userIndex].score < score) {
                    oldScores[userIndex].score = score;
                    localStorage.setItem('scores', JSON.stringify(oldScores.sort((a, b) => b.score - a.score)))
                }
            }
        }

    }

    ctx.drawImage(earth, 0, cvs.height - earth.height);
    ctx.drawImage(bird, xPos, yPos);


    yPos += grav;

    ctx.fillStyle = "#000";
    ctx.font = "24px Verdana";
    ctx.fillText("Score: " + score, 10, cvs.height - 20);

    if (isGameOver) {
        return;
    }

    requestAnimationFrame(draw);
};

const startGameFn = () => {
    if (input.value === '') {
        warningActive.classList.add('warning__active')
    } else {
        formRegistration.classList.add('start_game')
        draw();
    }
}
//get started
startGame.addEventListener('click', () => {
    startGameFn();
});


//get start game when press for Enter
input.addEventListener('keypress', function(e){
 if(e.key === 'Enter') {
    formRegistration.classList.add('start_game');
    draw();
    e.preventDefault();
 }
});
//write function which relod game when click button
btnReloadGame.addEventListener('click', () => {
    document.getElementById('game__over').style.opacity = 0;
    btnReloadGame.style.opacity = 0;
    resetStartValues();
    startGameFn();
});

const user = document.getElementById('record__item');
const recordList = document.getElementById('record__list');

const recordArray = JSON.parse(localStorage.getItem('scores'));

recordArray.sort((a, b) => {
    return b.score - a.score
});

recordArray.forEach((item) => {
    recordList.innerHTML += `<li id="record__item" class="record__item">${item.name}: ${item.score} point('s)</li>`
});

