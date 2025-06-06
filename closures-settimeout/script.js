/* 
// SetTimeout concepts

function x() {
    var i = 1; 
    setTimeout(function () {
        console.log(i);
    }, 3000);
    console.log("Hello");
}
x();

// here it will not wait for 3 second then print "Hello". it will print "Hello" then print "1" after wating 3 seconds
 */

// We need to print 1 to 5 in  every i seconds

/* 
function x() {

    for (var i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 3000);
    }
    console.log("Hello");
}
x();

 */
// But we see here it's printing 6.
// To fix this, we can use 'let' instead of 'var' because 'let' is block scoped and creates a new copy of 'i' for each iteration.

// Why 6?
// The keyword 'var' is not block scoped, meaning it will not create a new copy of 'i' for each iteration.
// Instead, it creates **one shared memory location** for 'i' and updates its value during each iteration.

// When 'i' becomes 6, the loop condition fails (`i <= 5` becomes false).
// But the function remembers the **last value of 'i'** from the shared memory, which is 6.
// That's why it prints 6 when the function is called.

// In JavaScript, memory for variables is assigned **when the function is executed**, not when the function is defined.
// Therefore, every function created inside the loop points to the same memory reference.

// using let 

/* 

function x() {

    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        },i * 3000);
    }
    console.log("Hello");
}
x();

 */

// But if we want to use 'var' and still print 1 to 5,
// we can create a closure by wrapping the setTimeout inside a function and passing 'i' as an argument.
// This creates **a new copy of 'i'** for each iteration due to function scope,
// so each setTimeout remembers its own value of 'i'.

function x() {

    for (var i = 1; i <= 5; i++) {

        function closures(i) {
            setTimeout(function () {
                console.log(i);
            },i * 3000);
        }
        closures(i);
    }
  
    console.log("Hello");
}
x();