
// Countdown Timer
document.addEventListener("DOMContentLoaded", () => {
  const countdownDate = new Date("2024-12-31T23:59:59").getTime();

  const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) return;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    

      document.getElementById("days").textContent = days.toString().padStart(2, "0");
  };

  setInterval(updateCountdown, 1000);
});
