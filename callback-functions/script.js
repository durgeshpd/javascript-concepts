// A callback function is a function passed as an argument to another function. The function receiving the callback can call it later when needed.

function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

function callMe() {
    console.log("I am Callback function");
}

greet("Durgesh", callMe);