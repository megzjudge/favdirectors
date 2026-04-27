document.addEventListener("DOMContentLoaded", () => {
  const FIREFLY_COUNT = 42;

  const layer = document.createElement("div");
  layer.className = "firefly-layer";
  document.body.appendChild(layer);

  for (let i = 0; i < FIREFLY_COUNT; i += 1) {
    const firefly = document.createElement("span");
    firefly.className = "firefly";

    const size = randomBetween(3, 8);
    const duration = randomBetween(8, 22);
    const delay = randomBetween(0, 12);
    const driftX = randomBetween(-120, 120);
    const driftY = randomBetween(-120, 120);

    firefly.style.width = `${size}px`;
    firefly.style.height = `${size}px`;
    firefly.style.left = `${randomBetween(0, 100)}vw`;
    firefly.style.top = `${randomBetween(0, 100)}vh`;
    firefly.style.animationDuration = `${duration}s, ${randomBetween(1.8, 4.2)}s`;
    firefly.style.animationDelay = `-${delay}s, -${randomBetween(0, 4)}s`;
    firefly.style.setProperty("--drift-x", `${driftX}px`);
    firefly.style.setProperty("--drift-y", `${driftY}px`);

    layer.appendChild(firefly);
  }
});

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}
