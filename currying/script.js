// CURRYING IN JAVASCRIPT
// Currying is a technique in functional programming where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument.
// In JavaScript, currying helps create reusable and flexible functions.
// It can be achieved using two common approaches:
// 1. The `bind()` method — by fixing one or more arguments of a function.
// 2. Closures — by returning a function from another function, preserving the outer scope.

let multiply = function (x, y) {
    console.log(x * y);
};

// We can create copies of the function with preset arguments

// 🔹 Using bind method

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3); // Output: 6

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(3); // Output: 9

let multiplyFixed = multiply.bind(this, 2, 3); 
multiplyFixed(5); // Output: 6 — the argument '5' is ignored because both parameters are already set

let multiplyNothing = multiply.bind(this); 
multiplyNothing(2, 3); // Output: 6 — works as a normal call; not recommended for currying

// 🔹 Using closures

let multiplyClosure = function (x) {
    return function (y) {
        console.log(x * y);
    };
};

let multiplyByTwoClosure = multiplyClosure(2);
multiplyByTwoClosure(3); // Output: 6
