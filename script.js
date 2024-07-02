
console.log("Welcome to Spotify : The World of Music");


// Here Initializing the variables 
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgessBar = document.getElementById('myProgressBar');

let songs = [
    {songName: "Brown Munde",filePath: "songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName: "Brown Munde",filePath: "songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName: "Brown Munde",filePath: "songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName: "Brown Munde",filePath: "songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName: "Brown Munde",filePath: "songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName: "Brown Munde",filePath: "songs/1.mp3",coverPath:"covers/1.jpg"},
];

//audioElement.play();

// Handle play/pause click

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
});

//Listen to Events 
myProgressBar.addEventListener('timeupdate',()=>{

    console.log('timeupdate');

})