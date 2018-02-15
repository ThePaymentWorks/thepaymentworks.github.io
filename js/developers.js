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
    default:
      return getPaypalInstructions();
  }
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
});` 
}

function getStripeInstructions() {
  return `// Require the Stripe package
var stripe = require('stripe')('30d0b8f9c831bcdb2ae501f37e7f48e4');

// Point the app at Testing Pays' Stripe charge Sim
stripe.setHost('api.testingpays.com', 443, 'https');
stripe._setApiField('basePath', '30d0b8f9c831bcdb2ae501f37e7f48e4/stripe/v1/');
stripe._prepResources();

// Create a charge, change the total to get a different response
await stripe.charges.create({
  amount: 2000,
  currency: 'usd',
  source: 'tok_189fPm2eZvKYlo2CEBNBHYzB',
  // obtained with Stripe.js
  description: 'Charge for testing.pays@example.com'
});`
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
});`
}
