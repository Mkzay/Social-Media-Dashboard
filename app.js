const checkbox = document.getElementById("checkbox");
const darkModeKey = "darkModeEnabled";

// Check if the user's preference for dark mode is stored
const isDarkModeEnabled = localStorage.getItem(darkModeKey) === "true";

// Function to set the dark mode state
const setDarkMode = (enabled) => {
  if (enabled) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  // Store the user's preference in localStorage
  localStorage.setItem(darkModeKey, enabled);
};

// Initialize the checkbox state based on the user's preference
checkbox.checked = isDarkModeEnabled;

// Set the initial dark mode state
setDarkMode(isDarkModeEnabled);

// Add event listener to toggle dark mode
checkbox.addEventListener("change", () => {
  setDarkMode(checkbox.checked);
});
