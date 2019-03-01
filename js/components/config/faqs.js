export var faqs = {
  stripe: [{
    question: 'Does creating a token deduct funds from the customers account?',
    answer: '<p>When using Stripe you create a token first either on its own, or as part of a customer object. This token is only a reference to the card details. The token ID on its own is not enough to do anything with the card, Stripe just stores the encrypted card details.</p><p>When you issue the charge, this is when you say which card need to be charged with what amount. Prior to this the card details haven\'t even left Stripe\'s domain.</p><p> The reason you get this error on Charge is simple - email only gets validated at that point. Prior to that it\'s the card details that get validated and stored as a token.</p>'
  }, {
    question: 'How do I collect customer credit card information and start a subscription later?',
    answer: '<p>That\'s actually the more common way to do this. Simply collect the payment details and create a token (or source) using your front-end. Then attach that token (or source) as a payment method on the customer record using the Create Card API Method.</p>'
  }, {
    question: 'Is it possible to charge customers recurrently without using Stripe\'s PLAN api?',
    answer: '<p>Yes, you can charge customers in Stripe without using their Subscriptions logic.</p><p>To do this you\'d want to collect card information on your front-end, then save it to a Customer in Stripe; you would store the id of this customer in your database.</p><p>When it comes to charge the user, you can have your application charge the saved card on a Customer you\'ve created within Stripe.</p>'
  }, {
    question: 'How do I tell if a subscription was successfully paid using Stripe Webhooks?',
    answer: '<p>Getting the charge ID for a subscription (or an invoice) can be done via their webhooks integration. You need to expose an API in your app where Stripe can fire these requests. You can subscribe to various events there, but in your case you\'d need to do so on charge.succeeded. The charge ID will be in the data structure of the event object.</p>'
  }, {
    question: 'Is it a good practice to store card_id returned from stripe to store on local database?',
    answer: '<p>Yes, that\'s totally normal. This way you can reference that card without the need to meet much of PCI compliance. You should be able to use that, with the customer_id later for other charge(s), subscription, etc.</p><p>Beware though, never log card numbers, CVV, expiry etc.</p>'
  }, {
    question: 'How do I make a partial refund?',
    answer: '<p>To refund part of a charge, provide an amount parameter, as an integer in cents or the charge currency’s smallest currency unit of the specific currency you are using.</p>'
  }, {
    question: 'How do I collect customer credit card information and start a subscription later?',
    answer: '<p>That\'s actually the more common way to do this. Simply collect the payment details and create a token (or source) using your front-end. Then attach that token (or source) as a payment method on the customer record using the Create Card API Method.</p>'
  }, {
    question: 'Can I create a recurring payment with using stripe subscriptions?',
    answer: '<p>You can save a card to a Customer, and then use it as you like, including charging a customer at a later time.</p>'
  }]
};