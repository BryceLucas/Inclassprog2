
document.addEventListener("DOMContentLoaded", () => {
  // Predefined picture containers
  const aPicture = document.getElementById("a-picture");
  const bPicture = document.getElementById("b-picture");
  const cPicture = document.getElementById("c-picture");

  // Buttons to show/hide pictures
  const buttonA = document.getElementById("btn-a");
  const buttonB = document.getElementById("btn-b");
  const buttonC = document.getElementById("btn-c");

  // Show button click functionality
  buttonA.addEventListener("click", () => {
    aPicture.style.visibility = "visible";
    bPicture.style.visibility = "hidden";
    cPicture.style.visibility = "hidden";
  });

  buttonB.addEventListener("click", () => {
    aPicture.style.visibility = "hidden";
    bPicture.style.visibility = "visible";
    cPicture.style.visibility = "hidden";
  });

  buttonC.addEventListener("click", () => {
    aPicture.style.visibility = "hidden";
    bPicture.style.visibility = "hidden";
    cPicture.style.visibility = "visible";
  });

  // Hide button functionality for each picture
  aPicture.querySelector("button").addEventListener("click", () => {
    aPicture.style.visibility = "hidden";
  });

  bPicture.querySelector("button").addEventListener("click", () => {
    bPicture.style.visibility = "hidden";
  });

  cPicture.querySelector("button").addEventListener("click", () => {
    cPicture.style.visibility = "hidden";
  });
});
