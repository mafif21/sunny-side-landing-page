window.addEventListener("click", function (eve) {
  if (eve.target.className == "hamburger") {
    target = eve.target.nextElementSibling;
    target2 = eve.target.previousElementSibling;
    target.classList.toggle("hamburger-screen");
    target2.classList.toggle("triangle");
  }
});
