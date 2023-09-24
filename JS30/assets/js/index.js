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
      
const songs = ['Uniqe & Nkeeei feat. Artem Shilovets - Афтерпати (feat. Xxxmanera)', '5утра - Давай Сбежим (Искорки)', 'Ирина Кайратовна - Чина']   
const img = ['Uniqe & Nkeeei feat. Artem Shilovets - Афтерпати (feat. Xxxmanera)', '', '']   

//Defolt song
let songIndex = 0
let imgIndex  = 0

function loadSong (song) {
    title.innerHTML = song
    audio.src = `assets/audio/${song}.mp3`
    cover.src = `assets/img/${songIndex + 1}.svg`
}

loadSong(songs[songIndex])

//play
function playSong() {
    player.classList.add('play')
    coverImg.classList.add('active')
    imgSrc.src = './assets/img/pause.png'
    audio.play();
}

function pauseSong() {
    player.classList.remove('play')
    coverImg.classList.remove('active')
    imgSrc.src = './assets/img/play.png'
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

//next song

function nextSong () {
    if(songIndex > songs.length - 1) {
        songIndex = 0
    }

    songIndex++
    loadSong(songs[songIndex])
    playSong()
}

nextBtn.addEventListener('click', nextSong)

//prev song
function prevSong() {
    songIndex--
    if(songIndex < 0 ) {
        songIndex = songs.length - 1
    }

    loadSong(songs[songIndex])
    playSong()
}

prevBtn.addEventListener('click', nextSong)

//Progress bar
function updateProgress (e) {
   const {duration, currentTime} = e.srcElement
   const progressPercent = (currentTime / duration) * 100
   progress.style.width = `${progressPercent}%`
}

audio.addEventListener('timeupdate', updateProgress)

//set progress

function setProgress(e) {
   const width = this.clientWidth
   const clickX = e.offsetX
   const duration = audio.duration

   audio.currentTime = (clickX / width) * duration

}

progressContainer.addEventListener('click', setProgress)


//auto play
audio.addEventListener('ended', nextSong)