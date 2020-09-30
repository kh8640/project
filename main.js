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
    navbarMenu.classList.remove("open");
    scrollIntoView(link);
  }
});

// 메뉴
const navtogle = document.querySelector(".navbar__togle-btn");
navtogle.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
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

// 위로보내기 (가끔 두번 눌러야 위로감)
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

// 프로젝트 버튼 누르면 갯수별로 나오게
const activebtn = document.querySelector(".category__btn.selected");
const workbtn = document.querySelector(".work__categories");
const workpro = document.querySelector(".work__projects");
const project = document.querySelectorAll(".project__img__all");
workbtn.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }
  workpro.classList.add("ani");
  setTimeout(() => {
    project.forEach((project) => {
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    workpro.classList.remove("ani");
  }, 300);
});

// Final touch on button state💡 이부분 못함
