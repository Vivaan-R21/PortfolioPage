// filepath: c:\Users\hadma\Desktop\portfolio-page\app\updateDuration.js
export function updateDuration() {
  const startDate = new Date('2024-09-09');
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate - startDate);
  const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30));
  const durationElement = document.getElementById('duration');
  if (durationElement) {
    durationElement.textContent = `${diffMonths} months`;
  }
}

document.addEventListener('DOMContentLoaded', updateDuration);