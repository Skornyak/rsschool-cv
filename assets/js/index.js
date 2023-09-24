console.log('hello')

const player = document.querySelector('.player'),
      playBtn = document.querySelector('.play'),
      prevBtn = document.querySelector('.prev'),
      nextBtn = document.querySelector('.next'),
      audio = document.querySelector('.audio'),
      progressContainer = document.querySelector('.progress__container'),
      progress = document.querySelector('.progress'),
      title = document.querySelector('.song'),
      cover = document.querySelector('.cover'),
      coverImg = document.querySelector('.cover__img'),
      imgSrc = document.querySelector('.img__src');
//Name songs
      
const songs = ['', '', '']      

//Defolt song
let songIndex = 0

function loadSong (song) {
    title.innerHTML = song
    audio.src = `audio/${song}.mp3`
    cover.src = `assets/img/${songIndex + 1}.svg`
}

loadSong(songs[songIndex])

//play
function playSong() {
    player.classList.add('play')
    audio.play();
}

function pauseSong() {
    player.classList.remove('play')
    audio.pause();
}

playBtn.addEventListener('click', () => {
    const isPlaying = player.classList.contains('play');
    if (isPlaying) {
        pauseSong();
    }else {
        playSong();
    }
})
