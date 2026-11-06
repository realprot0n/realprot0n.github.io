console.log("MUSIC PLAYER: loaded");
let song_player = document.getElementById('song-player');
let song_image = document.getElementById('song-image');
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
    song_image.style.animationPlayState = "paused";
});
song_player.addEventListener("play", () => {
    song_image.style.animationPlayState = "running";
});