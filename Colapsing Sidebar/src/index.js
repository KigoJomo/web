const collapse = document.getElementById("collapse");
const sidebar = document.getElementById("sidebar");
const desc = document.querySelectorAll(".desc");
var click = 0;

collapse.addEventListener("click", () => {
    if (click === 0) {
        desc.forEach((element) => {
          element.style.display = "none";
        });
        sidebar.style.width = "75px";
        click = 1;
    } else {
        desc.forEach((element) => {
          element.style.display = "block";
        });
        sidebar.style.width = "200px";
        click = 0;
    }
});
