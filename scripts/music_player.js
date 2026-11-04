console.log("MUSIC PLAYER: loaded");
let song_player = document.getElementById('song-player');
let song_image = document.getElementById('song-image');
//song_player.play();
song_player.addEventListener("pause", () => {
    song_image.style.animationPlayState = "paused";
});
song_player.addEventListener("play", () => {
    song_image.style.animationPlayState = "running";
});