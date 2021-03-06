var menu = document.querySelector(".menu");
var ham = document.querySelector(".ham");
var xIcon = document.querySelector(".xIcon");
var menuIcon = document.querySelector(".menuIcon");
ham.addEventListener("click", toggleMenu);
// toggle menu in and out when clicking on the hamburger
function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    xIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    xIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}
var menuLinks = document.querySelectorAll(".menuLink");
menuLinks.forEach(function (menuLink) {
  menuLink.addEventListener("click", toggleMenu);
});

$(document).ready(function () {
  $(".main-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  });
});
