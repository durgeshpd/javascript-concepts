// CALL METHOD
// The call() method calls a function with a specified 'this' context.
// You pass the arguments to the function individually, one by one.

// APPLY METHOD
// The apply() method is similar to call(), but it takes arguments as an array.
// Useful when arguments are already in an array or array-like structure.

// BIND METHOD
// The bind() method returns a new function with a specified 'this' context.
// It does not execute immediately — you can call the bound function later.

let name = {
    firstname: "Durgesh",
    lastname: "Pandey",
};

let printFullName = function () {
    console.log(this.firstname + " " + this.lastname);
};

let printDetails = function (hometown, state) {
    console.log(this.firstname + " " + this.lastname + " from " + hometown + ", " + state);
};

// call method
// 'call' allows us to call a function with a specific 'this' value

printFullName.call(name); // Output: Durgesh Pandey

// When the function has parameters, pass them after the context
printDetails.call(name, "Salem", "Tamil Nadu");

// Let's say we have another object
let name2 = {
    firstname: "Virat",
    lastname: "Kohli",
};

// Instead of redefining the same function, we use 'function borrowing' via call
printFullName.call(name2); // Output: Virat Kohli
printDetails.call(name2, "London", "UK");

// apply method
// Similar to call, but takes arguments as an array
printDetails.apply(name, ["Salem", "Tamil Nadu"]); // Output: Durgesh Pandey from Salem, Tamil Nadu

// BIND METHOD

let printMyName = printDetails.bind(name2, "London", "UK"); // bind is similar to call, but it returns a new function with 'this' bound to the given object. We can invoke it later.

console.log(printMyName); // This will print the function definition

printMyName(); // We can invoke it later like this
