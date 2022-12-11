let menuBtn = document.querySelector(".header__btn");
let menu = document.querySelector(".header__navigation");
let menuCloseButton = document.querySelector(".header__menu-close");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("header__hidden");
});

menuCloseButton.addEventListener("click", (target) => {
  menu.classList.add("header__hidden");
});
