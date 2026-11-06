console.log("MUSIC PLAYER: loaded");
let song_player = document.getElementById('song-player');
let song_image = document.getElementById('song-image');
let song_pause_play = document.getElementById("song-pause-play")
let playing = false

song_image.addEventListener("click",() => {
    if (playing) {
        song_player.pause();
    } else {
        song_player.play();
    }
    playing = !playing;
})

song_player.addEventListener("pause", () => {
    console.log("playing paused");
    
    song_image.style.animationPlayState = "paused";
    
    song_pause_play.style.animationName = "song-player-svg-fade-in";
    song_pause_play.src = "/images/pause-button.svg";
    song_pause_play.style.animationPlayState = "running";
});
song_player.addEventListener("play", () => {
    console.log("playing started");
    
    song_image.style.animationPlayState = "running";
    
    song_pause_play.style.animationName = "song-player-svg-fade-out";
    song_pause_play.src = "/images/play-button.svg";
    song_pause_play.style.animationPlayState = "running";
});