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
        { 'type': 'covered', 'endpointDescription': { 'title': 'Tokens (POST)', 'text': 'This endpoint allows you to create a token for charging your customers from credit card details without having to manage PCI compliance. Tokens can be used for a single charge or to setup subscriptions and add cards to user accounts.'} },
        { 'type': 'covered', 'endpointDescription': { 'title': 'Tokens (GET)', 'text': 'This endpoint allows you to retrieve a token which you have already created. Tokens can be used for a single charge or to setup subscriptions and add cards to user accounts.'} },
        { 'type': 'na', 'content': 'N/A' },
        { 'type': 'na', 'content': 'N/A' }
      ],
      [
        { 'type': 'covered', 'endpointDescription': { 'title': 'Charges (POST)', 'text': 'This endpoint allows you to create a single charge against a users source (a token, cc details or bacnk account).'} },
        { 'type': 'vote', 'content': 'Vote' },
        { 'type': 'vote', 'content': 'Vote' },
        { 'type': 'na', 'content': 'N/A' }
      ],
      [
        { 'type': 'covered', 'endpointDescription': { 'title': 'Customers (POST)', 'text': 'This endpoint allows you to create a customer object. These can be used to setup repeat billing, store a source with a related customer or setup subscriptions.'} },
        { 'type': 'vote', 'content': 'Vote' },
        { 'type': 'vote', 'content': 'Vote' },
        { 'type': 'vote', 'content': 'Vote' }
      ],
      [
        { 'type': 'covered', 'endpointDescription': { 'title': 'Coupons (POST)', 'text': 'This endpoint allows you to create coupons taht your users can use to get discounts on your products.'} },
        { 'type': 'covered', 'endpointDescription': { 'title': 'Coupons (GET)', 'text': 'This endpoint allows you to retrieve the details of a particular coupons such as how many times it has been claimed.'} },
        { 'type': 'vote', 'content': 'Vote' },
        { 'type': 'vote', 'content': 'Vote' }
      ],
      [
        { 'type': 'covered', 'endpointDescription': { 'title': 'Subscriptions (POST)', 'text': 'This endpoint allows you to create new subscriptions for a customer. This way you can setup repeated billing for your users and manage trial periods.'} },
        { 'type': 'vote', 'content': 'Vote' },
        { 'type': 'vote', 'content': 'Vote' },
        { 'type': 'vote', 'content': 'Vote' }
      ],
      [
        { 'type': 'covered', 'endpointDescription': { 'title': 'Refunds (POST)', 'text': 'This endpoint allows you to create  refund for a particular charge.'} },
        { 'type': 'vote', 'content': 'Vote' },
        { 'type': 'vote', 'content': 'Vote' },
        { 'type': 'na', 'content': 'N/A' }
      ],
      [
        { 'type': 'goldEndpoint', 'endpointDescription': { 'title': 'Webhooks (POST)', 'text': 'This endpoint allows you to trigger a particular webhook call at will. This is not one of stripes endpoint, rather it is an endpoint we have created to make testing stripe webhooks easier.'} },
        { 'type': 'na', 'content': 'N/A' },
        { 'type': 'na', 'content': 'N/A' },
        { 'type': 'na', 'content': 'N/A' }
      ],
    ]
  }
};