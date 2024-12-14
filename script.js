// Function to detect theme and apply it
function detectAndApplyTheme() {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  // Apply dark or light mode based on system preference
  if (prefersDarkMode) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.add("light-mode");
  }
}

// Function to toggle between dark and light mode manually
function toggleTheme() {
  const currentTheme = document.body.classList.contains("dark-mode")
    ? "dark"
    : "light";

  if (currentTheme === "dark") {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
  } else {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
  }
}

// Add event listener for the toggle button
document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

// Apply theme on page load
detectAndApplyTheme();

// Update countdown logic and apply dark/light mode dynamically
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
