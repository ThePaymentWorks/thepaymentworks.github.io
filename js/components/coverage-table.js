var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CoverageTables = {
  'stripe': {
    'xAxis': {
      'hasHeadings': true,
      'headings': ['POST', 'GET', 'PUT', 'DELETE']
    },
    'yAxis': {
      'hasHeadings': true,
      'headings': ['Tokens', 'Charges', 'Customers', 'Coupons', 'Subscriptions', 'Refunds', 'Webhooks']
    },
    'rows': [[{ 'type': 'covered', 'endpointDescription': { 'title': 'Tokens (POST)', 'text': 'This endpoint allows you to create a token for charging your customers from credit card details without having to manage PCI compliance. Tokens can be used for a single charge or to setup subscriptions and add cards to user accounts.' } }, { 'type': 'covered', 'endpointDescription': { 'title': 'Tokens (GET)', 'text': 'This endpoint allows you to retrieve a token which you have already created. Tokens can be used for a single charge or to setup subscriptions and add cards to user accounts.' } }, { 'type': 'na', 'content': 'N/A' }, { 'type': 'na', 'content': 'N/A' }], [{ 'type': 'covered', 'endpointDescription': { 'title': 'Charges (POST)', 'text': 'This endpoint allows you to create a single charge against a users source (a token, cc details or bacnk account).' } }, { 'type': 'vote', 'content': 'Vote' }, { 'type': 'vote', 'content': 'Vote' }, { 'type': 'na', 'content': 'N/A' }], [{ 'type': 'covered', 'endpointDescription': { 'title': 'Customers (POST)', 'text': 'This endpoint allows you to create a customer object. These can be used to setup repeat billing, store a source with a related customer or setup subscriptions.' } }, { 'type': 'vote', 'content': 'Vote' }, { 'type': 'vote', 'content': 'Vote' }, { 'type': 'vote', 'content': 'Vote' }], [{ 'type': 'covered', 'endpointDescription': { 'title': 'Coupons (POST)', 'text': 'This endpoint allows you to create coupons taht your users can use to get discounts on your products.' } }, { 'type': 'covered', 'endpointDescription': { 'title': 'Coupons (GET)', 'text': 'This endpoint allows you to retrieve the details of a particular coupons such as how many times it has been claimed.' } }, { 'type': 'vote', 'content': 'Vote' }, { 'type': 'vote', 'content': 'Vote' }], [{ 'type': 'covered', 'endpointDescription': { 'title': 'Subscriptions (POST)', 'text': 'This endpoint allows you to create new subscriptions for a customer. This way you can setup repeated billing for your users and manage trial periods.' } }, { 'type': 'vote', 'content': 'Vote' }, { 'type': 'vote', 'content': 'Vote' }, { 'type': 'vote', 'content': 'Vote' }], [{ 'type': 'covered', 'endpointDescription': { 'title': 'Refunds (POST)', 'text': 'This endpoint allows you to create  refund for a particular charge.' } }, { 'type': 'vote', 'content': 'Vote' }, { 'type': 'vote', 'content': 'Vote' }, { 'type': 'na', 'content': 'N/A' }], [{ 'type': 'goldEndpoint', 'endpointDescription': { 'title': 'Webhooks (POST)', 'text': 'This endpoint allows you to trigger a particular webhook call at will. This is not one of stripes endpoint, rather it is an endpoint we have created to make testing stripe webhooks easier.' } }, { 'type': 'na', 'content': 'N/A' }, { 'type': 'na', 'content': 'N/A' }, { 'type': 'na', 'content': 'N/A' }]]
  }
};

function getEndpointDescription(type, description) {
  switch (type) {
    case 'na':
      return {
        title: 'Not Applicable',
        text: 'This endpoint does not exist on the Payment Gateway.'
      };
    case 'vote':
      return {
        title: 'Coming Soon',
        text: 'This endpoint is supported by the payment gateway but we havn\'t gotten to it yet. If this endpoint is really important to you, vote for it by clicking this button and we will move it up our que.'
      };
    case 'covered':
      return description;
    case 'goldEndpoint':
      return description;
    default:
      return description;
  }
}

function getCell(updateDescription, _ref) {
  var type = _ref.type,
      content = _ref.content,
      endpointDescription = _ref.endpointDescription,
      onHoverText = _ref.onHoverText;

  var description = getEndpointDescription(type, endpointDescription);

  switch (type) {
    case 'na':
      return React.createElement(
        'td',
        { onClick: updateDescription(description).bind(this) },
        React.createElement(
          'div',
          { className: 'w-100 text-center' },
          React.createElement(
            'small',
            { className: 'text-gray-light font-weight-light' },
            content
          )
        )
      );
    case 'vote':
      return React.createElement(
        'td',
        { onClick: updateDescription(description).bind(this) },
        React.createElement(
          'div',
          { className: 'w-100 text-center' },
          React.createElement(
            'small',
            { className: 'text-gray font-weight-light' },
            content
          )
        )
      );
    case 'covered':
      return React.createElement(
        'td',
        { onClick: updateDescription(description).bind(this) },
        React.createElement('i', { className: 'w-100 text-primary fas fa-check' })
      );
    case 'goldEndpoint':
      return React.createElement(
        'td',
        { onClick: updateDescription(description).bind(this) },
        React.createElement(
          'span',
          { className: 'fa-stack fa-1x w-100 h-100' },
          React.createElement('i', { className: 'w-100 text-primary fas fa-certificate fa-stack-2x' }),
          React.createElement('i', { className: 'w-100 text-white fas fa-check fa-stack-1x' })
        )
      );
    default:
      return React.createElement(
        'td',
        { onClick: updateDescription(description).bind(this) },
        React.createElement(
          'div',
          { className: 'w-100 text-center' },
          React.createElement(
            'small',
            { className: 'text-gray-light font-weight-light' },
            content
          )
        )
      );
  }
};

function getXAxisHeadings(xAxis, yAxis) {
  if (!xAxis.hasHeadings) return;

  return React.createElement(
    'tr',
    null,
    yAxis.hasHeadings ? React.createElement('th', null) : '',
    xAxis.headings.map(function (h) {
      return React.createElement(
        'th',
        { className: 'text-center text-gray' },
        h
      );
    })
  );
}

function getModalDescription(showModal, modalDescription) {
  if (showModal && modalDescription) {
    return React.createElement(
      'div',
      { className: 'col', style: { minHeight: '12rem' } },
      React.createElement(
        'div',
        { className: 'container-fluid card shadow mt-3 border-none overflow-none' },
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'col light-background py-2' },
            React.createElement(
              'b',
              null,
              modalDescription.title
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'col py-2' },
            React.createElement(
              'p',
              null,
              modalDescription.text
            )
          )
        )
      )
    );
  }
}

var CoverageTable = function (_React$Component) {
  _inherits(CoverageTable, _React$Component);

  function CoverageTable(props) {
    _classCallCheck(this, CoverageTable);

    var _this = _possibleConstructorReturn(this, (CoverageTable.__proto__ || Object.getPrototypeOf(CoverageTable)).call(this, props));

    _this.state = {
      table: CoverageTables.stripe,
      endpointDescription: '',
      showEndpointDescription: false
    };
    return _this;
  }

  _createClass(CoverageTable, [{
    key: 'updateDescription',
    value: function updateDescription(endpointDescription) {
      var _this2 = this;

      return function (e) {
        var currentActiveElement = document.querySelector('.activeCell');

        console.log(currentActiveElement);
        if (currentActiveElement) {
          currentActiveElement.classList.remove('activeCell');
        }

        console.log(e);
        console.log(e.target);
        console.log(e.target.classList);
        console.log(e.target.closest('td').classList.add('activeCell'));
        _this2.setState({
          showEndpointDescription: true,
          endpointDescription: endpointDescription
        });
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var table = this.state.table;
      var xAxis = table.xAxis,
          yAxis = table.yAxis,
          rows = table.rows;


      return React.createElement(
        'div',
        { className: 'container-fluid mb-5' },
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'col' },
            React.createElement(
              'table',
              { className: 'coverage-table' },
              React.createElement(
                'tbody',
                null,
                getXAxisHeadings(xAxis, yAxis),
                rows.map(function (row, index) {
                  return React.createElement(
                    'tr',
                    null,
                    yAxis.hasHeadings ? React.createElement(
                      'td',
                      { 'class': 'text-right text-gray' },
                      yAxis.headings[index]
                    ) : '',
                    row.map(function (cell) {
                      return getCell(_this3.updateDescription.bind(_this3), cell);
                    })
                  );
                })
              )
            )
          ),
          getModalDescription(this.state.showEndpointDescription, this.state.endpointDescription)
        )
      );
    }
  }]);

  return CoverageTable;
}(React.Component);

var e = React.createElement;
var domContainer = document.querySelector('#coverage-table');
ReactDOM.render(e(CoverageTable), domContainer);