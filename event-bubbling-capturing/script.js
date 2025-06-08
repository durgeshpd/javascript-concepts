// Event Bubbling:
// Event goes from the target element up to its parents.
// This is the default in JavaScript.

// Event Capturing (Trickling):
// Event goes from the top parent down to the target.
// Use by passing 'true' as the third argument in addEventListener.

// ------------------------
// Event Bubbling (default)
// ------------------------
document.querySelector("#grandparent").addEventListener('click', () => {
    console.log("Grandparent clicked (bubbling)");
});

document.querySelector("#parent").addEventListener('click', () => {
    console.log("Parent clicked (bubbling)");
});

document.querySelector("#child").addEventListener('click', () => {
    console.log("Child clicked (bubbling)");
});

// ------------------------
// Event Capturing (trickling)
// ------------------------
document.querySelector("#grandparent").addEventListener('click', () => {
    console.log("Grandparent clicked (capturing)");
}, true);

document.querySelector("#parent").addEventListener('click', () => {
    console.log("Parent clicked (capturing)");
}, true);

document.querySelector("#child").addEventListener('click', () => {
    console.log("Child clicked (capturing)");
}, true);

// ------------------------
// Mixed Phase Example
// ------------------------
document.querySelector("#grandparent").addEventListener('click', () => {
    console.log("Grandparent clicked (capturing)");
}, true); // Capturing

document.querySelector("#parent").addEventListener('click', () => {
    console.log("Parent clicked (bubbling)");
}, false); // Bubbling

document.querySelector("#child").addEventListener('click', () => {
    console.log("Child clicked (capturing)");
}, true); // Capturing

// ------------------------
// Controlling Propagation
// ------------------------
document.querySelector("#grandparent").addEventListener('click', () => {
    console.log("Grandparent clicked (bubbling)");
}, false); // Bubbling

document.querySelector("#parent").addEventListener('click', (e) => {
    e.stopPropagation(); // Prevents event from bubbling up
    console.log("Parent clicked (bubbling, propagation stopped)");
}, false);

document.querySelector("#child").addEventListener('click', () => {
    console.log("Child clicked (bubbling)");
}, false);
