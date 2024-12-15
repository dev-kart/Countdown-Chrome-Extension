const countdownElements = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
};

const dateDisplay = document.getElementById("current-date");
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const styleSelect = document.getElementById("style-select");

// Function to calculate and update the countdown
function updateCountdown() {
  const now = new Date();
  const endOfYear = new Date(now.getFullYear() + 1, 0, 1);
  const timeLeft = endOfYear - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  countdownElements.days.textContent = days.toString().padStart(2, "0");
  countdownElements.hours.textContent = hours.toString().padStart(2, "0");
  countdownElements.minutes.textContent = minutes.toString().padStart(2, "0");
  countdownElements.seconds.textContent = seconds.toString().padStart(2, "0");

  const formattedDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  dateDisplay.textContent = `Today is ${formattedDate}`;
}

// Function to toggle between dark and light themes
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
  themeIcon.className = document.body.classList.contains("dark-mode")
    ? "moon"
    : "sun";
  savePreferences(); // Save theme preference
  applyStyle();
}

// Function to apply the selected countdown style
function applyStyle() {
  const selectedStyle = styleSelect.value;
  document.body.className = document.body.classList.contains("dark-mode")
    ? "dark-mode"
    : "light-mode";
  document.body.classList.add(selectedStyle);

  // Save style preference to localStorage
  localStorage.setItem("selectedStyle", selectedStyle);
}

// Function to load preferences from localStorage
function loadPreferences() {
  const savedTheme = localStorage.getItem("theme");
  const savedStyle = localStorage.getItem("selectedStyle");

  if (savedTheme) {
    document.body.classList.add(savedTheme);
    themeIcon.className = savedTheme === "dark-mode" ? "moon" : "sun";
  } else {
    // Default theme is light-mode
    document.body.classList.add("light-mode");
    themeIcon.className = "sun";
  }

  if (savedStyle) {
    document.body.classList.add(savedStyle);
    styleSelect.value = savedStyle; // Set the dropdown to the saved style
  }
}

// Function to save the theme preference
function savePreferences() {
  const theme = document.body.classList.contains("dark-mode")
    ? "dark-mode"
    : "light-mode";
  localStorage.setItem("theme", theme);
}

// Event listeners
themeToggle.addEventListener("click", toggleTheme);
styleSelect.addEventListener("change", applyStyle);

// Initialize countdown, styles, and load preferences
updateCountdown();
setInterval(updateCountdown, 1000);
loadPreferences(); // Load preferences from localStorage
