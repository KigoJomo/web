const button = document.getElementById("button");
const phone = document.getElementById("phone");
const arrow = document.getElementById("arrow");


button.addEventListener("click", () => {
    phone.classList.toggle("phone-rotated");
    arrow.classList.toggle("arrow-rotated");
    button.classList.toggle("button-clicked");
});
