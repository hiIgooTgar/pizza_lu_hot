// navbar sticky muncul ketika di scroll
window.addEventListener("scroll", function () {
  let navSticky = document.querySelector(".navbar");
  navSticky.classList.toggle("sticky", window.scrollY > 0);
});

// navbar responsive
const navbar = document.getElementById("click");

function showMenu() {
  click.style.right = "0";
}

function hideMenu() {
  click.style.right = "-240px";
}

// jika klik navbar bagian luar akan hilang
const navList = document.querySelector(".navbar-list");
const ham = document.querySelector("#hamburger");

window.addEventListener("click", function (e) {
  if (!navList.contains(e.target) && !ham.contains(e.target)) {
    click.style.right = "-230px";
  }
});

// scroll delay
const sr = ScrollReveal({
  distance: "30px",
  duration: 2000,
  reset: true,
});

sr.reveal(" .hero-content", {delay: 400, origin: "left"});
//sr.reveal(" .heading", {delay: 100, origin: "left"});
//sr.reveal(" .about-row", {delay: 50, origin: "top"});
//sr.reveal(" .menu-row", {delay: 50, origin: "top"});
//sr.reveal(" .contact-row", {delay: 50, origin: "top"});
