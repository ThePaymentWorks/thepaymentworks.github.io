function setActive (sim) {
  // Set the active tab
  elements = document.getElementsByClassName('tab active');
  [].forEach.call(elements, function(e) { e.classList.toggle('active'); });
  document.getElementById(sim).classList.toggle('active');

  const source = getSource(sim);
  this.notebook.setSource(source);
}

function getSource (sim) {
  switch(sim) {
    case 'optimal':
      return getOptimalInstructions();
    case 'stripe':
      return getStripeInstructions();
    case 'adyen':
      return getAdyenInstructions();
    default:
      return getPaypalInstructions();
  }
}

function getAdyenInstructions() {
  return `var request = require('request');

await request({
  method: 'POST',
  url: 'https://api.testingpays.com/30d0b8f9c831bcdb2ae501f37e7f48e4/adyen/v1/authorise',
  headers: { 'Authorization': 'Bearer 30d0b8f9c831bcdb2ae501f37e7f48e4' },
  body: JSON.stringify(
    {
      "additionalData": {
              "card.encrypted.json": "adyenjs_0_1_19$kpmcjcv0lQhWtZqS9DjOVVFrxSHn7BJ/BekYTSNy6ewW9tYIIjT4vI7kWFdP3tEahxVky9eWVZ1x7rWjMpS4WSpYqA30YQiENwZCIfdMGzKHz2JTYM8iRlL+2aqiF/CZwO/6l5z+iicjDchxi4D/q78ZHrQ20MfxVrErYv5f0d2RUdC94lNQCmrnnb2LtWG+DeVP8tWmkfysXDlwD1c2Yui4KGKEME3CQJW4TxxNFUPZhF5PzZFW2pxTD0bEP0yVUsQWuCslitnoN9yLplP8SltaoWbDQzICvfu/G4YtVMM98ttqW2bu14Sma6Us1nn6R+fN+zi6aXraBdD4IVENqw==$zeVqBNHEjlZMj4JPWkh9Yt5I052kdd3fz4qQ7u9pYZBcwtRK6EAC9IScUbIG0/snUTdDIba7/3c7XY7RJu2Ue5uO+nMwi8pFafO8sicV5FXwaI1n5ecZOirb2WVT1xj2wUVmGh6wut+3Aw0BMfH2O21CcuBZUhUuOOka6qamZyDadwn+noYLXt08jKwN5iPYpGOsQBHmla0nragL9Mm0riwOWKPCx1Xf940Epwqf3eG/cxN5Y7021juKstgvbtumjMs0u95nZxljlWqrdjrKLk7rUqRJLf1IhrStDcoxCKoiN1AWTRWld49FqyI7o6KNjWIyWwSYIZSAxxXSQB7sKE4NS/3T+V/hGDVKRUwz5pBtvg1CGaz2xvdEs5riCVRtnkkyoxX1sf+ENyOr8gpIZNSH6DbefaGbgBmmuaRqSWDlWF2AkQ1DHrawHkWn51ansnA0",
      "executeThreeD": "true"
      },
      "amount": {
        "currency": "EUR",
        "value": 5000
      },
      "browserInfo": {
        "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36",
        "acceptHeader": "application/json"
      },
      "merchantAccount": "TestingPaysCom",
      "reference": "localhost-503-498",
      "shopperIP": "0:0:0:0:0:0:0:1",
      "shopperInteraction": "Ecommerce",
      "shopperName": {
        "firstName": "Tom",
        "lastName": "Mulaney",
        "gender": "MALE"
      },
      "shopperReference": "localhost-498",
      "shopperStatement": "TP-topup"
    })
});`;
}

function getPaypalInstructions() {
  return `var request = require('request');

await request({
  method: 'POST',
  url: 'https://api.testingpays.com/30d0b8f9c831bcdb2ae501f37e7f48e4/paypal/v1/payments/payment',
  headers: { 'Authorization': 'Bearer 30d0b8f9c831bcdb2ae501f37e7f48e4' },
  body: JSON.stringify({
    "intent": "sale",
    "payer": { "payment_method": "paypal" },
    "transactions": [{
      "amount": {
        "currency": "USD",
        "total": "1.00"
      }
    }]
  })
});`;
}

function getStripeInstructions() {
  return `// Require the Stripe package
var stripe = require('stripe')('30d0b8f9c831bcdb2ae501f37e7f48e4');

// Point the app at Testing Pays' Stripe charge Sim
stripe.setHost('api.testingpays.com', 443, 'https');
stripe._setApiField('basePath', '/30d0b8f9c831bcdb2ae501f37e7f48e4/stripe/v1/');
stripe._prepResources();

// Create a charge, change the total to get a different response
await stripe.charges.create({
  amount: 2000,
  currency: 'usd',
  source: 'tok_189fPm2eZvKYlo2CEBNBHYzB',
  // obtained with Stripe.js
  description: 'Charge for testing.pays@example.com'
});`;
}

function getOptimalInstructions() {
  return `var request = require('request');

await request({
  method: 'POST',
  url: 'https://api.testingpays.com/30d0b8f9c831bcdb2ae501f37e7f48e4/optimal/v1/orders/12345',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer 30d0b8f9c831bcdb2ae501f37e7f48e4'
  },
  body: JSON.stringify({
    totalAmount: '100',
    currencyCode: 'EUR',
    merchantRefNum: '12345b'
  })
});`;
}
