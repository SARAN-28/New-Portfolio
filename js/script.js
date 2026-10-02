var menuBtn = document.getElementById("menuBtn");
var navLinks = document.getElementById("navLinks");
var themeBtn = document.getElementById("themeBtn");

menuBtn.onclick = function () {
  navLinks.classList.toggle("open");
};

var links = navLinks.getElementsByTagName("a");

for (var i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    navLinks.classList.remove("open");
  };
}

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeBtn.textContent = "\u2600\uFE0E";
}

themeBtn.onclick = function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "\u2600\uFE0E";
    localStorage.setItem("theme", "dark");
  } else {
    themeBtn.textContent = "\u263E";
    localStorage.setItem("theme", "light");
  }
};