// Promises Example with resolve and reject
function createOrder(cart) {
    return new Promise((resolve, reject) => {
        if (cart.length > 0) {
            console.log("Order Created");
            resolve("OrderId123");
        } else {
            reject("Cart is empty");
        }
    });
}

function proceedToPayment(orderId) {
    return new Promise((resolve, reject) => {
        if (orderId) {
            console.log("Payment Successful");
            resolve("PaymentInfo123");
        } else {
            reject("Payment Failed");
        }
    });
}

function showOrderSummary(paymentInfo) {
    return new Promise((resolve) => {
        console.log("Order Summary Displayed");
        resolve(paymentInfo);
    });
}

function updateWallet(paymentInfo) {
    return new Promise((resolve) => {
        console.log("Wallet Updated");
        resolve();
    });
}

createOrder(cart)
    .then(orderId => proceedToPayment(orderId))
    .then(paymentInfo => showOrderSummary(paymentInfo))
    .then(paymentInfo => updateWallet(paymentInfo))
    .catch(error => console.error(error));