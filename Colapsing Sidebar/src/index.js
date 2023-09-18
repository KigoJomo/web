const collapse = document.getElementById("collapse");
const sidebar = document.getElementById("sidebar");
const desc = document.querySelectorAll(".desc");
const collapseIcon = document.getElementById("collapse-icon");
const main = document.getElementById("main");
var click = 0;

collapse.addEventListener("click", () => {
  if (click === 0) {
    desc.forEach((element) => {
      element.style.display = "none";
    });
    sidebar.style.width = "75px";
    collapseIcon.style.transform = "rotate(180deg)";
    collapseIcon.style.transition = "all .5s ease";
    main.style.width = "calc(100% - 75px)";
    click = 1;
  } else {
    desc.forEach((element) => {
      element.style.display = "block";
    });
    sidebar.style.width = "200px";
    collapseIcon.style.transform = "rotate(0deg)";
    collapseIcon.style.transition = "all .5s ease";
    main.style.width = "calc(100% - 200px)";
    click = 0;
  }
});
