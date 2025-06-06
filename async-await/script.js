// 1. Basic Example of async/await with a Promise that resolves after 10 seconds

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!");
    }, 10000);
});

async function handlePromise() {
    console.log("Hi");
    const val = await p;  // Waits for 10 seconds for the promise to resolve
    console.log("Hey");
    console.log(val);  // Logs the resolved value of the promise

    const val2 = await p;  // Waits for the same promise to resolve again
    console.log("Hey there");
    console.log(val2);  // Logs the resolved value of the promise
}

// It will print the following in sequence after waiting for 10 seconds:
// Hi
// Hey
// Promise Resolved Value!!
// Hey there
// Promise Resolved Value!!

// 2. Handling Multiple Promises Sequentially

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 Resolved Value!!");
    }, 20000);
});

async function handlePromiseSequential() {
    console.log("Hi");
    const val = await p;  // Waits for p (10 seconds)
    console.log("Hey");
    console.log(val);  // Logs the value from the first promise

    const val2 = await p2;  // Waits for p2 (20 seconds)
    console.log("Hey there");
    console.log(val2);  // Logs the value from the second promise
}

// Here, it will first log the value from `p`, then wait for 20 seconds for `p2` to resolve,
// printing `val` and `val2` sequentially:
// Hi
// Hey
// Promise Resolved Value!!
// Hey there
// Promise 2 Resolved Value!!

// 3. Handling Promises with Different Delays

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 Resolved Value!!");
    }, 20000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 Resolved Value!!");
    }, 10000);
});

async function handlePromiseWithDifferentDelays() {
    console.log("Hi");
    const val = await p1;  // Waits for p1 (20 seconds)
    console.log("Hey");
    console.log(val);  // Logs the value from p1

    const val2 = await p3;  // Waits for p2 (10 seconds)
    console.log("Hey there");
    console.log(val2);  // Logs the value from p2
}

// After 20 seconds, both `val` and `val2` will be printed:
// Hi
// Hey
// Promise 1 Resolved Value!!
// Hey there
// Promise 2 Resolved Value!!

// 4. Using Promises without async/await

function getData() {
    p.then((res) => console.log(res));  // Logs the resolved value of `p`
    console.log("Hello");  // This will run immediately after the promise is called
}

getData();
// Output:
// Hello
// Promise Resolved Value!!
