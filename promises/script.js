// Callback Hell Example
// Purpose: Simulates a sequence of asynchronous API calls.
const cart = ["shoes", "pant", "kurta"];

createOrder(cart, function (orderId) {
    proceedToPayment(orderId, function (paymentInfo) {
        showOrderSummary(paymentInfo, function () {
            updateWallet();
        });
    });
});

// Callback Hell is also known as Pyramid of Doom because of its nested structure.
// This can be resolved using Promises or Async/Await.

// Promises Example
// Purpose: Improves code readability by chaining asynchronous tasks.

// Using regular functions
createOrder(cart)
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        return showOrderSummary(paymentInfo);
    })
    .then(function (paymentInfo) {
        return updateWallet(paymentInfo);
    })
    .catch(function (error) {
        console.error("Something went wrong", error);
    });

// Using arrow functions to make it leaner
createOrder(cart)
    .then(orderId => proceedToPayment(orderId))
    .then(paymentInfo => showOrderSummary(paymentInfo))
    .then(paymentInfo => updateWallet(paymentInfo))
    .catch(error => console.error("Something went wrong", error));

// Promises provide better error handling with the .catch() method.
