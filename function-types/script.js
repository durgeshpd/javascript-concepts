 // JavaScript Functions Notes

// 1. Function Declaration  
// Traditional way to declare functions
function greet() {
    console.log("Hello");
  }
  greet();
  
  // 2. Function Expression  
  // Function assigned to a variable
  const greetExp = function () {
    console.log("Hello");
  };
  greetExp();
  
  // 3. Anonymous Function  
  // Function without a name, used in expressions or callbacks
  const greetAnon = function () {
    console.log("Hello");
  };
  greetAnon();
  
  // 4. Named Function Expression  
  // Function expression with a name, useful for recursion or debugging
  const greetNamed = function sayHello() {
    console.log("Hello");
  };
  greetNamed();
  
 // 5. First-Class Function  
// Functions can be assigned, passed as arguments, and returned from other functions

// Passing Function as Argument
function greet() {
    console.log("Hello");
  }
  function callFunction(fn) {
    fn(); // Calling the function passed as argument
  }
  callFunction(greet);
  
  // Returning Function from Another Function
  function outerFunction() {
    return function innerFunction() {
      console.log("Returned Function Called");
    };
  }
  
  const result = outerFunction(); // `outerFunction` returns `innerFunction`
  result(); // Calling the returned function  
  
// 6. Arrow Function  
// Shorthand syntax for function expressions
const greetArrow = () => {
    console.log("Hello");
};
greetArrow();
  