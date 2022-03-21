// hamburgerMenu.addEventListener("click", function () {
//   console.log("ok");
// });

window.addEventListener("click", function (eve) {
  if (eve.target.className == "hamburger") {
    target = eve.target.nextElementSibling;
    target.classList.toggle("hamburger-screen");
  }
});
