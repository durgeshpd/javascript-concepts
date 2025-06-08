// --------------------------------------------
// 📘 What is Event Delegation?
// --------------------------------------------
// Event delegation is a technique where we add a single event listener to a parent element,
// and handle events that occur on its children.
// It works because of event bubbling — the event
// flows up from the child to the parent.
// This is useful for performance and when
// dynamically adding/removing child elements.
// --------------------------------------------

// ✅ Example: Handling clicks on <li> using a single listener on <ul>
document.getElementById('list').addEventListener('click',function (e) {
    // Check if the clicked element is an <li>
    if (e.target.tagName === 'LI') {
        console.log('Clicked on:',e.target.textContent);
        e.target.style.backgroundColor = '#d3f9d8'; // visual feedback
    }
});

// 💡 Bonus: Add a new item dynamically
const list = document.getElementById('list');
const newItem = document.createElement('li');
newItem.textContent = 'Item 4';
list.appendChild(newItem);
