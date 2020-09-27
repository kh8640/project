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

//스크롤링 메뉴
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  {
    const scrollto = document.querySelector(link);
    scrollto.scrollIntoView({ behavior: "smooth" });
  }
});
