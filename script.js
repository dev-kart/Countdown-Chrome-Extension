function updateCountdown() {
  const now = new Date();
  const endOfYear = new Date(now.getFullYear() + 1, 0, 1);
  const timeLeft = endOfYear - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  document.getElementById(
    "countdown"
  ).textContent = `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();
