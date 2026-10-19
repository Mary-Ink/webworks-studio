"use strict";

// ==========================================
// PART 1 — DIFFICULTY DISCLOSURE
// ==========================================

// Find the button and the information panel.
const difficultyButton = document.querySelector("#difficulty-toggle");
const difficultyPanel = document.querySelector("#difficulty-panel");

// Listen for clicks on the button.
difficultyButton.addEventListener("click", function () {
  // Check whether the panel is currently open.
  const isOpen = difficultyButton.getAttribute("aria-expanded") === "true";

  // Show the panel if closed, or hide it if open.
  difficultyPanel.hidden = isOpen;

  // Update the accessibility state of the button.
  difficultyButton.setAttribute("aria-expanded", String(!isOpen));
});


// ==========================================
// PART 2 — HIKE PLANNING FORM
// ==========================================

// Find the form and its feedback area.
const hikeForm = document.querySelector("#hike-form");
const formFeedback = document.querySelector("#form-feedback");

// Listen for form submission.
hikeForm.addEventListener("submit", function (event) {
  // Clear any previous feedback.
  formFeedback.textContent = "";

  // Stop the form from submitting to a server.
  event.preventDefault();

  // Read the user's selections.
  const trail = document.querySelector("#trail").value;
  const experience = document.querySelector("#experience").value;
  const hours = document.querySelector("#hours").value;

  // Find out how much time the user selected.
  let availableTime;

  if (hours === "2") {
    availableTime = "about 2 hours";
  } else if (hours === "3") {
    availableTime = "about 3 hours";
  } else {
    availableTime = "4 or more hours";
  }

  // Display a confirmation message.
  formFeedback.textContent =
    "Your hike plan is ready! You selected " +
    trail +
    ", your experience level is " +
    experience +
    ", and you have " +
    availableTime +
    " available. Remember to check current weather and trail conditions before leaving.";
});