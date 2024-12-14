function updateCountdown() {
  const now = new Date();
  const endOfYear = new Date(now.getFullYear() + 1, 0, 1);
  const timeLeft = endOfYear - now;

  // Calculate time left in days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  // Update countdown elements
  document.getElementById("days").textContent = days < 10 ? `0${days}` : days;
  document.getElementById("hours").textContent =
    hours < 10 ? `0${hours}` : hours;
  document.getElementById("minutes").textContent =
    minutes < 10 ? `0${minutes}` : minutes;
  document.getElementById("seconds").textContent =
    seconds < 10 ? `0${seconds}` : seconds;

  // Display current date and day of the week
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = now.toLocaleDateString("en-US", options);
  document.getElementById(
    "current-date"
  ).textContent = `Today is ${formattedDate}`;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();
