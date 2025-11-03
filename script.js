// script.js — Tagline Rotation (10 sec) + Countdowns

document.addEventListener("DOMContentLoaded", () => {
  // === TAGLINE ROTATION ===
  const blocks = document.querySelectorAll('.tagline-block');
  let index = 0;

  function showNext() {
    blocks.forEach(b => b.classList.remove('active'));
    blocks[index].classList.add('active');
    index = (index + 1) % blocks.length;
  }

  showNext();
  setInterval(showNext, 10000); // ← 10 SECONDS

  // === COUNTDOWN (BIG + SMALL) ===
  function updateCountdowns() {
    document.querySelectorAll('.countdown, .countdown-big').forEach(el => {
      const target = new Date(el.dataset.target).getTime();
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) {
        el.innerText = "Launched!";
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);

      const isBig = el.classList.contains('countdown-big');
      const h = isBig ? String(hours).padStart(2, '0') : hours;
      const m = isBig ? String(mins).padStart(2, '0') : mins;
      const s = isBig ? String(secs).padStart(2, '0') : secs;

      el.innerText = `${days}d ${h}h ${m}m ${s}s`;
    });
  }

  updateCountdowns();
  setInterval(updateCountdowns, 1000);
});