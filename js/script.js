document.addEventListener("DOMContentLoaded", () => {
  const contentContainer = document.getElementById("content-container");

  const buttonA = document.getElementById("btn-a");
  const buttonB = document.getElementById("btn-b");
  const buttonC = document.getElementById("btn-c");

  buttonA.addEventListener("click", () => {
    contentContainer.innerHTML = `
            <div>
                <img src="Images/css-letter-a.png" alt="A is for aspect-ratio">
                <button id="hide-a">Hide Result</button>
            </div>
        `;
    document.getElementById("hide-a").addEventListener("click", () => {
      contentContainer.innerHTML = "";
    });
  });

  buttonB.addEventListener("click", () => {
    contentContainer.innerHTML = `
            <div>
                <img src="Images/css-letter-b.png" alt="B is for border">
                <button id="hide-b">Hide Result</button>
            </div>
        `;
    document.getElementById("hide-b").addEventListener("click", () => {
      contentContainer.innerHTML = "";
    });
  });

  buttonC.addEventListener("click", () => {
    contentContainer.innerHTML = `
            <div>
                <img src="Images/css-letter-c.png" alt="C is for colors">
                <button id="hide-c">Hide Result</button>
            </div>
        `;
    document.getElementById("hide-c").addEventListener("click", () => {
      contentContainer.innerHTML = "";
    });
  });
});
