const video = document.querySelector("video");
const play = document.querySelector(".play");
const duration = video.duration;
const progress = document.querySelector(".progress");
progress.innerHTML = duration;

const click = 0;
play.addEventListener("click", () => {
    video.pause();
});
