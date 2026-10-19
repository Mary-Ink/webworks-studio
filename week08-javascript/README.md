# Week 8 — JavaScript Interaction Handoff
## Hill Country Trail Guide

**Primary User:** Maya Torres

## Required Behaviors
1. Accessible trail-difficulty disclosure
2. Hike-planning form validation/submission feedback

---

## JavaScript Decisions

### Decision 1 — DOM Selection
What elements did your script need to select, and why?

I used the "document.querySelector()" for the difficulty button, difficulty panel, hike-planning form, and feedback area. I also used the IDs that were already in the index so that the Javascript connects to the right elements.

### Decision 2 — Event Handling
What events did you listen for? Why were those events appropriate?

I listened or used the "click" event for the difficulty button, and a "submit" event for the form. These events would be appropriate because it lets the page respond when users open the guide or submit their hike plan.

### Decision 3 — State / DOM Update
How did the interface change after user action?

The interface changes after users actions when the difficulty button is clicked, the information panel would open or close. The "aria-expanded" is updated to be able to match the panel's state, and when the valid form is submitted, the page would show a confirmation of the selected trail, experience level, and available time.

### Decision 4 — Accessibility
How did you preserve or improve keyboard/accessibility behavior?

I just kept the "aria-controls", "aria-expanded", and "hidden" codes for the difficulty guide, which the button works with keyboard activation. I also kept the fields that the form wanted me to do so the browser would be able to show it's messages. The feedback uses "role="status" and "aria-live="polite" to help with the announce the confirmation.

---

## Testing Notes

### Difficulty Disclosure
- Mouse: Clicked the button to open and close the guide.
- Keyboard: Used "Tab" to reach the button and "Enter" or "Space" to activate it.
- `aria-expanded`: Checked that it would change to "true" when the panel opens, and "false" when it closes.
- Console errors: Nothing so far.

### Planning Form
- Empty/invalid submission: Checked that the browsers validation stops by showing a incomplete form from showing successful feedback.
- Valid submission: Selected a trail, experience level, available time, and checked the confirmation box. The page would show the confirmation message.
- Keyboard: Used the keyboard to select options, check the box, and submit the form.
- Console errors: Nothing so far.

---

## Live Site
[Github](https://github.com/Mary-Ink/webworks-studio)
