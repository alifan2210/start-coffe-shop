// hamburger menu
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".navbar ul ");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

// darkmode
const darkMode = document.querySelector("#darkmode");
const navShadow = document.querySelector(".navbar");

let darkToggle = localStorage.getItem("dark-mode");

darkMode.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  navShadow.classList.toggle("dark-nav");
  if (document.body.classList.contains("dark-mode", "dark-nav")) {
    localStorage.setItem("tema", "dark");
    localStorage.setItem("shadow", "hitam");
    document.querySelector("#darkmode").innerText = "light mode";
  } else {
    localStorage.setItem("tema", "light");
    localStorage.setItem("shadow", "putih");
    document.querySelector("#darkmode").innerText = "dark mode";
  }
});

let tema = localStorage.getItem("tema");

if (tema == "dark") {
  document.body.classList.add("dark-mode");
  document.querySelector("#darkmode").innerText = "light mode";
} else {
  document.body.classList.remove("dark-mode");
  document.querySelector("#darkmode").innerText = "dark mode";
}

let shadow = localStorage.getItem("shadow");
if (shadow == "hitam") {
  navShadow.classList.add("dark-nav");
} else {
  navShadow.classList.remove("dark-nav");
}

// stinky ketika di close
const closeNav = document.querySelector("header span");
const hidenNav = document.querySelector("header");

closeNav.addEventListener("click", function () {
  hidenNav.classList.toggle("close");
  localStorage.setItem("close", hidenNav);
});

const apple = document.querySelector(".apple");
apple.addEventListener("click", function () {
  window.location.href = "https://www.apple.com/id/app-store/";
});

const google = document.querySelector(".google");
google.addEventListener("click", function () {
  window.location.href = "https://play.google.com/";
});

if (localStorage.getItem("close")) {
  hidenNav.style.display = "none";
} else {
  hidenNav.style.display = "display";
}
