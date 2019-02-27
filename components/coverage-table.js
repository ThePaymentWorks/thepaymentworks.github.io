const CoverageTables = {
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

function getEndpointDescription(type, description) {
  switch(type) {
     case 'na':
      return {
        title: 'Not Applicable',
        text: 'This endpoint does not exist on the Payment Gateway.',
      };
    case 'vote':
      return {
        title: 'Coming Soon',
        text: 'This endpoint is supported by the payment gateway but we havn\'t gotten to it yet. If this endpoint is really important to you, vote for it by clicking this button and we will move it up our que.',
      };
    case 'covered':
      return description;
    case 'goldEndpoint':
      return description;
    default:
      return description;
  }
}

function getCell(updateDescription, { type, content, endpointDescription, onHoverText }) {
  const description = getEndpointDescription(type, endpointDescription);

  switch(type) {
    case 'na':
      return (
        <td onClick={updateDescription(description).bind(this)}>
          <div className="w-100 text-center">
            <small className="text-gray-light font-weight-light">{content}</small>
          </div>
        </td>
      );
    case 'vote':
      return (
        <td onClick={updateDescription(description).bind(this)}>
          <div className="w-100 text-center">
            <small className="text-gray font-weight-light">{content}</small>
          </div>
        </td>
      );
    case 'covered':
      return (
        <td onClick={updateDescription(description).bind(this)}>
          <i className="w-100 text-primary fas fa-check"></i>
        </td>
      );
    case 'goldEndpoint':
      return (
        <td onClick={updateDescription(description).bind(this)}>
          <span className="fa-stack fa-1x w-100 h-100">
            <i className="w-100 text-primary fas fa-certificate fa-stack-2x"></i>
            <i className="w-100 text-white fas fa-check fa-stack-1x"></i>
          </span>
        </td>
      );
    default:
      return (
        <td onClick={updateDescription(description).bind(this)}>
          <div className="w-100 text-center">
            <small className="text-gray-light font-weight-light">{content}</small>
          </div>
        </td>
      );
  }
};

function getXAxisHeadings(xAxis, yAxis) {
  if (!xAxis.hasHeadings) return;

  return (
    <tr>
      { yAxis.hasHeadings ? <th></th> : '' }
      { xAxis.headings.map(h => <th className="text-center text-gray">{h}</th>) }
    </tr>
  );
}

function getModalDescription(showModal, modalDescription) {
  if (showModal && modalDescription) {
    return (
      <div className="col" style={{minHeight: '12rem'}}>
        <div className="container-fluid card shadow mt-3 border-none overflow-none">
          <div className="row">
            <div className="col light-background py-2">
              <b>{modalDescription.title}</b>
            </div>
          </div>

          <div className="row">
            <div className="col py-2">
              <p>{modalDescription.text}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class CoverageTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      table: CoverageTables.stripe,
      endpointDescription: '',
      showEndpointDescription: false,
    };
  }

  updateDescription(endpointDescription) {
    return e => {
      const currentActiveElement = document.querySelector('.activeCell');

      if (currentActiveElement) {
        currentActiveElement.classList.remove('activeCell');
      }

      this.setState({
        showEndpointDescription: true,
        endpointDescription,
      });
    }
  }

  render() {
    const table = this.state.table;
    const { xAxis, yAxis, rows } = table;

    return (
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col">
            <table className="coverage-table">
                <tbody>
                { getXAxisHeadings(xAxis, yAxis) }
                { rows.map((row, index) => (
                  <tr>
                    {yAxis.hasHeadings
                      ? <td class="text-right text-gray">{yAxis.headings[index]}</td>
                      : ''
                    }
                    {row.map(cell => getCell(this.updateDescription.bind(this), cell))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {getModalDescription(this.state.showEndpointDescription, this.state.endpointDescription)}
        </div>
      </div>
    );
  }
}

const e = React.createElement;
const domContainer = document.querySelector('#coverage-table');
ReactDOM.render(e(CoverageTable), domContainer);
