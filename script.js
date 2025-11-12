// script.js
document.addEventListener("DOMContentLoaded", () => {
  const STAR_COUNT = 200; // yıldız sayısı
  const body = document.body;

  for (let i = 0; i < STAR_COUNT; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    // Rastgele boyut
    const size = Math.random() * 3 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // Rastgele konum
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;

    // Farklı parlama süreleri
    const duration = 1.5 + Math.random() * 2;
    star.style.animationDuration = `${duration}s`;

    body.appendChild(star);
  }
});
