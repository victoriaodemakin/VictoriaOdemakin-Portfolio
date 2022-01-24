const header = document.querySelector(".header");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > header.offsetHeight + 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

var mobilemenu = document.getElementById("mobilemenu");
var nav = document.getElementById("nav");
var mobilemexit = document.getElementById("mobileexit");
var toggleNav = document.getElementById("toggleNav");

mobilemenu.addEventListener("click", function (e) {
  nav.classList.toggle("nav-bar");
  e.preventDefault();
});

mobileexit.addEventListener("click", function (e) {
  nav.classList.add("nav-bar");
  e.preventDefault();
});

document.onclick = function (e) {
  if (e.target.id !== "mobilemenu" && e.target.id !== "mobileexit") {
    nav.classList.add("nav-bar");
  }
};
