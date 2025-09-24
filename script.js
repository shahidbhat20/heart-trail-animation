let bodyEl = document.querySelector("body");
const img = document.createElement("img");
img.src =
  "https://cdn4.iconfinder.com/data/icons/general-office/91/General_Office_55-1024.png";

bodyEl.addEventListener("mousemove", function (event) {
  // img.textContent = this.URL("https://cdn4.iconfinder.com/data/icons/general-office/91/General_Office_55-1024.png")

  x = event.clientX;
  y = event.clientY;
  let spanEl = document.createElement("span");
  spanEl.style.left = x + "px";
  spanEl.style.top = y + "px";
  bodyEl.appendChild(spanEl);
  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";

  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});

bodyEl.addEventListener("touchmove", function (event) {
  event.preventDefault();
  for (let touch of event.touches) {
        createTrailElement(touch.clientX, touch.clientY);
    bodyEl.appendChild(spanEl);
    const size = Math.random() * 100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";
  }

  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});
