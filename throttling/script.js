// 📘 What is Throttling?
// Throttling makes sure a function runs only once
// every X milliseconds, no matter how often the event happens.

// Throttle function: limits how often fn runs (once every delay ms)
function throttle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

// Show/hide Back to Top button based on scrollY
function checkScroll() {
  const btn = document.getElementById('backToTop');
  if (window.scrollY > 300) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
}

// Throttled version: runs max once every 300ms
const throttledCheckScroll = throttle(checkScroll, 300);

// Attach throttled event listener
window.addEventListener('scroll', throttledCheckScroll);

// Bonus: Scroll to top when button clicked
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
