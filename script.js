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


window.addEventListener('deviceorientation', function(event) {
    const alpha = event.alpha; // Z-axis rotation (0-360°)
    const beta = event.beta;   // X-axis rotation (-180 to 180°)
    const gamma = event.gamma; // Y-axis rotation (-90 to 90°)
});

// Device motion (accelerometer)
window.addEventListener('devicemotion', function(event) {
    const acceleration = event.acceleration;
    const rotationRate = event.rotationRate;
});