"use strict";

// navbar 투명하게
const navbar = document.querySelector("#navbar");
const navbarHight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

//펑션
function scrollIntoView(selector) {
  const scrollto = document.querySelector(selector);
  scrollto.scrollIntoView({ behavior: "smooth" });
}

//스크롤링 메뉴
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  {
    scrollIntoView(link);
  }
});

// 컨택
const cbutton = document.querySelector(".home__contact");
cbutton.addEventListener("click", () => {
  scrollIntoView("#contact");
});

// 홈  점점 투명하게
const home = document.querySelector(".home__container");
const homehight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homehight;
});

// 위로보내기 가끔 두번 눌러야 위로감
const up = document.querySelector(".up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homehight) {
    up.classList.add("visible");
  } else {
    up.classList.remove("visible");
  }
});

up.addEventListener("click", () => {
  scrollIntoView("#home");
});
