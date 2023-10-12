const play_pause = document.getElementById("play-pause");
const video = document.getElementById("video");
const animationTarget = document.getElementById("play-btn");

play_pause.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playAnimation();
  } else {
    video.pause();
    playAnimation();
  }
});

function playAnimation() {
  // Toggle the animation class to trigger it
  animationTarget.classList.remove("animate"); // Remove to reset the animation
  void animationTarget.offsetWidth; // This line is used to reset the animation, don't remove it
  animationTarget.classList.add("animate"); // Add the class to trigger the animation
}

const description = document.querySelector(".description");
const showMoreButton = document.querySelector(".hide");

showMoreButton.addEventListener("click", () => {
  const isHidden = description.getAttribute("data-hidden") === "true";
  if (isHidden) {
    description.setAttribute("data-hidden", "false");
    description.classList.remove("hidden");
    showMoreButton.textContent = "Hide";
  } else {
    description.setAttribute("data-hidden", "true");
    description.classList.add("hidden");
    showMoreButton.textContent = "Show more";
  }
});

const follow = document.querySelector(".follow");
const like = document.querySelector(".like");
var followed = false;
var liked = false;

follow.addEventListener("click", () => {
  if (followed === false) {
    follow.style.display = "none";
    followed = true;
  }
});

like.addEventListener("click", () => {
  if (liked === false) {
    like.style.fill = "#ff006a";
    liked = true;
  } else {
    like.style.fill = "#ffffff";
    liked = false;
  }
});
