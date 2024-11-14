
document.addEventListener("DOMContentLoaded", () => {

  const contentContainer = document.getElementById("content-container");

  const buttonA = document.getElementById("btn-a");
  const buttonB = document.getElementById("btn-b");
  const buttonC = document.getElementById("btn-c");

  // Adds an event listener for button A
  buttonA.addEventListener("click", () => {
    // Sets the content for button A, including an image and a hide button
    contentContainer.innerHTML = `
            <div>
                <img src="Images/css-letter-a.png" alt="A is for aspect-ratio">
                <button id="hide-a">Hide Result</button>
            </div>
        `;
    // Adds an event listener to hide the content when the hide button is clicked
    document.getElementById("hide-a").addEventListener("click", () => {
      contentContainer.innerHTML = "";
    });
  });

  // Adds an event listener for button B
  buttonB.addEventListener("click", () => {
    // Sets content for button B, including an image and a hide button
    contentContainer.innerHTML = `
            <div>
                <img src="Images/css-letter-b.png" alt="B is for border">
                <button id="hide-b">Hide Result</button>
            </div>
        `;
    // Adds an event listener to hide the content when the hide button is clicked
    document.getElementById("hide-b").addEventListener("click", () => {
      contentContainer.innerHTML = ""; 
    });
  });

  // Adds an event listener for button C
  buttonC.addEventListener("click", () => {
    // Sets the content for button C, including an image and a hide button
    contentContainer.innerHTML = `
            <div>
                <img src="Images/css-letter-c.png" alt="C is for colors">
                <button id="hide-c">Hide Result</button>
            </div>
        `;
    // Adds event listener to hide the content when the hide button is clicked
    document.getElementById("hide-c").addEventListener("click", () => {
      contentContainer.innerHTML = ""; 
    });
  });
});
