document.addEventListener("DOMContentLoaded", () => {
    if (!window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
        return;
    }

    const FIREFLY_COUNT = 26;
    const layer = document.getElementById("fireflyLayer");

    for (let i = 0; i < FIREFLY_COUNT; i++) {
        const firefly = document.createElement("span");
        firefly.className = "firefly";

        firefly.style.left = `${randomBetween(0, 100)}vw`;
        firefly.style.top = `${randomBetween(0, 100)}vh`;
        firefly.style.width = `${randomBetween(4, 9)}px`;
        firefly.style.height = firefly.style.width;
        firefly.style.setProperty("--drift-x", `${randomBetween(-180, 180)}px`);
        firefly.style.setProperty("--drift-y", `${randomBetween(-180, 180)}px`);
        firefly.style.animationDelay = `${randomBetween(0, 8) * -1}s`;

        layer.appendChild(firefly);
    }
});

function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}
