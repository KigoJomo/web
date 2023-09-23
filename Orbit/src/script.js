const orbit_one = document.querySelector(".one");
const orbit_two = document.querySelector(".two");
const button = document.getElementById("rotate");
const tooltip = document.getElementById("tooltip");
var click = 0;

button.addEventListener("click", () => {
    if (click === 0) {
        tooltip.innerHTML = "stop rotation of the atom's orbits"
        click = 1;
    } else {
        tooltip.innerHTML = "rotate the atom's orbits";
        click = 0;
    }
    orbit_one.classList.toggle("rotate-orbit-one");
    orbit_two.classList.toggle("rotate-orbit-two");
});
