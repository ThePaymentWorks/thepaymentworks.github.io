export const CoverageTables = {
  'stripe': {
    'xAxis': {
      'hasHeadings': true,
      'headings': ['POST', 'GET', 'PUT', 'DELETE']
    },
    'yAxis': {
      'hasHeadings': true,
      'headings': [
        'Tokens',
        'Charges',
        'Customers',
        'Coupons',
        'Subscriptions',
        'Refunds',
        'Webhooks'
      ]
    },
    'rows': [
      [
        { 'endpoint': 'tokens-post', 'type': 'covered', 'description': { 'title': 'Tokens (POST)', 'text': 'This endpoint allows you to create a token for charging your customers from credit card details without having to manage PCI compliance. Tokens can be used for a single charge or to setup subscriptions and add cards to user accounts.'} },
        { 'endpoint': 'tokens-get', 'type': 'covered', 'description': { 'title': 'Tokens (GET)', 'text': 'This endpoint allows you to retrieve a token which you have already created. Tokens can be used for a single charge or to setup subscriptions and add cards to user accounts.'} },
        { 'endpoint': 'tokens-put', 'type': 'na', 'content': 'N/A' },
        { 'endpoint': 'tokens-delete', 'type': 'na', 'content': 'N/A' }
      ],
      [
        { 'endpoint': 'charges-post', 'type': 'covered', 'description': { 'title': 'Charges (POST)', 'text': 'This endpoint allows you to create a single charge against a users source (a token, cc details or bacnk account).'} },
        { 'endpoint': 'charges-get', 'type': 'vote', 'content': 'Vote' },
        { 'endpoint': 'charges-put', 'type': 'vote', 'content': 'Vote' },
        { 'endpoint': 'charges-delete', 'type': 'na', 'content': 'N/A' }
      ],
      [
        { 'endpoint': 'customers-post', 'type': 'covered', 'description': { 'title': 'Customers (POST)', 'text': 'This endpoint allows you to create a customer object. These can be used to setup repeat billing, store a source with a related customer or setup subscriptions.'} },
        { 'endpoint': 'customers-get', 'type': 'vote', 'content': 'Vote' },
        { 'endpoint': 'customers-put', 'type': 'vote', 'content': 'Vote' },
        { 'endpoint': 'customers-delete', 'type': 'vote', 'content': 'Vote' }
      ],
      [
        { 'endpoint': 'coupons-post', 'type': 'covered', 'description': { 'title': 'Coupons (POST)', 'text': 'This endpoint allows you to create coupons taht your users can use to get discounts on your products.'} },
        { 'endpoint': 'coupons-get', 'type': 'covered', 'description': { 'title': 'Coupons (GET)', 'text': 'This endpoint allows you to retrieve the details of a particular coupons such as how many times it has been claimed.'} },
        { 'endpoint': 'coupons-put', 'type': 'vote', 'content': 'Vote' },
        { 'endpoint': 'coupons-delete', 'type': 'vote', 'content': 'Vote' }
      ],
      [
        { 'endpoint': 'subscriptions-post', 'type': 'covered', 'description': { 'title': 'Subscriptions (POST)', 'text': 'This endpoint allows you to create new subscriptions for a customer. This way you can setup repeated billing for your users and manage trial periods.'} },
        { 'endpoint': 'subscriptions-get', 'type': 'vote', 'content': 'Vote' },
        { 'endpoint': 'subscriptions-put', 'type': 'vote', 'content': 'Vote' },
        { 'endpoint': 'subscriptions-delete', 'type': 'vote', 'content': 'Vote' }
      ],
      [
        { 'endpoint': 'refunds-post', 'type': 'covered', 'description': { 'title': 'Refunds (POST)', 'text': 'This endpoint allows you to create  refund for a particular charge.'} },
        { 'endpoint': 'refunds-get', 'type': 'vote', 'content': 'Vote' },
        { 'endpoint': 'refunds-put', 'type': 'vote', 'content': 'Vote' },
        { 'endpoint': 'refunds-delete', 'type': 'na', 'content': 'N/A' }
      ],
      [
        { 'endpoint': 'webhooks-post', 'type': 'goldEndpoint', 'description': { 'title': 'Webhooks (POST)', 'text': 'This endpoint allows you to trigger a particular webhook call at will. This is not one of stripes endpoint, rather it is an endpoint we have created to make testing stripe webhooks easier.'} },
        { 'endpoint': 'webhooks-get', 'type': 'na', 'content': 'N/A' },
        { 'endpoint': 'webhooks-put', 'type': 'na', 'content': 'N/A' },
        { 'endpoint': 'webhooks-delete', 'type': 'na', 'content': 'N/A' }
      ]
    ]
  }
}
