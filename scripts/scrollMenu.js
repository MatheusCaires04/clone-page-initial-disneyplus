const menuNone = document.querySelector(".header__content__top");
const menuFixed = document.querySelector(".header__content__topFixed");
const headerBlack = document.querySelector(".bg__black");

const trocaMenu = document.querySelector(".signature");

window.addEventListener("scroll", function () {
  menuNone.classList.toggle("changeMenu", window.scrollY > 350);
  menuFixed.classList.toggle("changeMenuBlack", window.scrollY > 350);
  if (window.scrollY > 350) {
    document.getElementById("bg__black").style.backgroundColor = "black";
    document.getElementById("bg__black").style.zIndex = 9999;
  } else if (window.scrollY < 350) {
    document.getElementById("bg__black").style.backgroundColor = "transparent";
  }
});
