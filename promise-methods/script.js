// Promise Methods Explanation

// Promise.all()
// It takes an array of promises and resolves when all promises resolve or rejects if any promise rejects.

// Example:

const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);

Promise.all([p1, p2, p3])
  .then(results => console.log(results))
  .catch(err => console.error(err));

// Promise.allSettled()
// It waits for all promises to be settled (either resolved or rejected) and returns their results.

// Example:

const p4 = Promise.resolve(10);
const p5 = Promise.reject("Error");
const p6 = Promise.resolve(30);

Promise.allSettled([p4, p5, p6])
  .then(results => console.log(results));

// ### Promise.race()
// It resolves or rejects as soon as one promise resolves or rejects.

// Example:

const p7 = new Promise(resolve => setTimeout(resolve, 100, "One"));
const p8 = new Promise(resolve => setTimeout(resolve, 50, "Two"));

Promise.race([p7, p8])
  .then(result => console.log(result));

// ### Promise.any()
// It resolves as soon as one promise resolves or rejects if all promises are rejected.

// Example:

const p9 = Promise.reject("Error");
const p10 = Promise.resolve("Success");
const p11 = Promise.reject("Failed");

Promise.any([p9, p10, p11])
  .then(result => console.log(result))
  .catch(err => console.log(err));