var nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 50) {
    nav.classList.add("bg-p-blue", "shadow-sm");
  } else {
    nav.classList.remove("bg-p-blue", "shadow-sm");
  }
});
