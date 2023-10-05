let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");

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

//sound file
let fly = new Audio();
let scoreAudio = new Audio();

fly.src = "assets/audio/fly.mp3"
scoreAudio.src = "assets/audio/score.mp3"


let gap = 90;

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


let score = 0;

//position bird
let xPos = 10;
let yPos = 150;
let grav = 1.5;


function draw() {
    // requestAnimationFrame(draw);
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
                || yPos + bird.height >= cvs.height - earth.height){
                    
            e.preventDefault();
        }

        if (pipe[i].x == 5) {
            score ++;
            scoreAudio.play();
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

pipeBottom.onload = draw;

// draw();

document.addEventListener("keydown", someMethod);

function someMethod() {

}