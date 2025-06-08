// ------------------------------------------
// 📘 What is Debouncing?
// ------------------------------------------
// Debouncing is a technique to delay a function call
// until after a user stops triggering events (like typing).
// It helps improve performance by limiting unnecessary calls,
// like API requests on every keystroke.
// ------------------------------------------

// Show the result after user stops typing
function showResult(text) {
  console.log('Typing stopped. Value:', text);
}

// Debounce function
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// Get input field
const input = document.getElementById('search');

// Create debounced version
const debouncedShowResult = debounce(showResult, 500);

// Listen to input
input.addEventListener('input', function (e) {
  debouncedShowResult(e.target.value);
});
