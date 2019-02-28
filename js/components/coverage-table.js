var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { CoverageTables } from './config/coverage-tables.js';

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

var CellContent = function CellContent(_ref) {
  var type = _ref.type,
      content = _ref.content;

  switch (type) {
    case 'na':
      return React.createElement(
        'div',
        { className: 'w-100 text-center' },
        React.createElement(
          'small',
          { className: 'text-gray-light font-weight-light' },
          content
        )
      );
    case 'vote':
      return React.createElement(
        'div',
        { className: 'w-100 text-center' },
        React.createElement(
          'small',
          { className: 'text-gray font-weight-light' },
          content
        )
      );
    case 'covered':
      return React.createElement('i', { className: 'w-100 text-primary fas fa-check' });
    case 'goldEndpoint':
      return React.createElement(
        'span',
        { className: 'fa-stack fa-1x w-100 h-100' },
        React.createElement('i', { className: 'w-100 text-primary fas fa-certificate fa-stack-2x' }),
        React.createElement('i', { className: 'w-100 text-white fas fa-check fa-stack-1x' })
      );
    default:
      return React.createElement(
        'div',
        { className: 'w-100 text-center' },
        React.createElement(
          'small',
          { className: 'text-gray-light font-weight-light' },
          content
        )
      );
  }
};

var Cell = function Cell(_ref2) {
  var isActive = _ref2.isActive,
      setActiveCell = _ref2.setActiveCell,
      cell = _ref2.cell;
  var endpoint = cell.endpoint,
      type = cell.type,
      content = cell.content;


  return React.createElement(
    'td',
    { className: isActive ? 'activeCell' : '', onClick: setActiveCell(cell).bind(this) },
    React.createElement(CellContent, { type: type, content: content })
  );
};

var XAxisHeadings = function XAxisHeadings(_ref3) {
  var xAxis = _ref3.xAxis,
      yAxis = _ref3.yAxis;

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
};

var EnquiryForm = function EnquiryForm(_ref4) {
  var onSubmit = _ref4.onSubmit,
      email = _ref4.email,
      body = _ref4.body,
      handleChange = _ref4.handleChange;

  return React.createElement(
    'form',
    { onSubmit: onSubmit },
    React.createElement(
      'div',
      { className: 'form-group' },
      React.createElement(
        'label',
        { className: 'control-label' },
        'From: '
      ),
      React.createElement('input', { id: 'new-enquiry-email', className: 'form-control', type: 'text', value: email, onChange: handleChange('email') })
    ),
    React.createElement(
      'div',
      { className: 'form-group ' },
      React.createElement(
        'label',
        { 'for': 'custom_response', className: 'control-label' },
        'Suggestion:'
      ),
      React.createElement('textarea', { id: 'new-enquiry-text', rows: '10', placeholder: 'Hey, I noticed you don\'t have a sim for...', maxlength: '500', className: 'form-control', value: body, onChange: handleChange('body') })
    ),
    React.createElement(
      'div',
      { className: 'd-flex justify-content-end' },
      React.createElement(
        'button',
        { type: 'button', className: 'btn btn-secondary mr-auto', 'data-dismiss': 'modal' },
        'Close'
      ),
      React.createElement(
        'button',
        { type: 'submit', className: 'btn btn-primary' },
        'Submit'
      )
    )
  );
};

var Modal = function Modal(_ref5) {
  var title = _ref5.title,
      children = _ref5.children;

  return React.createElement(
    'div',
    { className: 'modal fade', id: 'voteModal', tabindex: '-1', role: 'dialog', 'aria-labelledby': 'voteModalLabel', 'aria-hidden': 'true' },
    React.createElement(
      'div',
      { className: 'modal-dialog', role: 'document' },
      React.createElement(
        'div',
        { className: 'modal-content' },
        React.createElement(
          'div',
          { className: 'modal-header text-white dark-background' },
          React.createElement(
            'h5',
            { className: 'modal-title' },
            title
          ),
          React.createElement(
            'button',
            { type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' },
            React.createElement(
              'span',
              { 'aria-hidden': 'true', className: 'text-white' },
              '\xD7'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'modal-body' },
          children
        )
      )
    )
  );
};

var EndpointDescription = function EndpointDescription(_ref6) {
  var show = _ref6.show,
      endpoint = _ref6.endpoint;

  if (!(show && endpoint)) return '';

  var description = endpoint.endpointDescription,
      type = endpoint.type;

  var _getEndpointDescripti = getEndpointDescription(type, description),
      _getEndpointDescripti2 = _getEndpointDescripti.title,
      title = _getEndpointDescripti2 === undefined ? '' : _getEndpointDescripti2,
      _getEndpointDescripti3 = _getEndpointDescripti.text,
      text = _getEndpointDescripti3 === undefined ? '' : _getEndpointDescripti3;

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
            title
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
            text
          ),
          type === 'vote' ? React.createElement(
            'button',
            { type: 'button', className: 'btn btn-primary', 'data-toggle': 'modal', 'data-target': '#voteModal' },
            'Vote'
          ) : ''
        )
      )
    )
  );
};

var CoverageTable = function (_React$Component) {
  _inherits(CoverageTable, _React$Component);

  function CoverageTable(props) {
    _classCallCheck(this, CoverageTable);

    var _this = _possibleConstructorReturn(this, (CoverageTable.__proto__ || Object.getPrototypeOf(CoverageTable)).call(this, props));

    _this.state = {
      table: CoverageTables[props.gateway],

      showEndpointDescription: false,
      showVoteModal: false,

      activeCell: null,

      email: '',
      body: ''
    };
    return _this;
  }

  _createClass(CoverageTable, [{
    key: 'setActiveCell',
    value: function setActiveCell(activeCell) {
      var _this2 = this;

      return function (e) {
        // Update the state with the current cells description
        _this2.setState({
          showEndpointDescription: true,
          activeCell: activeCell
        });
      };
    }
  }, {
    key: 'submitVote',
    value: function submitVote(e) {
      e.preventDefault();

      var data = {
        email: this.state.email,
        text: this.state.body,
        category: 'sim-coverage',
        metadata: { endpoint: this.state.activeCell.endpoint }
      };

      fetch('https://admin-api.testingpays.com/public_enquiry', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      $('#voteModal').modal('toggle');
    }
  }, {
    key: 'handleChange',
    value: function handleChange(name) {
      var _this3 = this;

      return function (e) {
        return _this3.setState(_defineProperty({}, name, e.target.value));
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

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
                React.createElement(XAxisHeadings, { xAxis: xAxis, yAxis: yAxis }),
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
                      var activeCell = _this4.state.activeCell;
                      var isActive = activeCell && activeCell.endpoint && activeCell.endpoint === cell.endpoint;
                      return React.createElement(Cell, { isActive: isActive, setActiveCell: _this4.setActiveCell.bind(_this4), cell: cell });
                    })
                  );
                })
              )
            )
          ),
          React.createElement(EndpointDescription, { endpoint: this.state.activeCell, show: this.state.showEndpointDescription })
        ),
        React.createElement(
          Modal,
          { title: 'Vote for simulator' },
          React.createElement(EnquiryForm, { onSubmit: this.submitVote.bind(this), email: this.state.email, body: this.state.body, handleChange: this.handleChange.bind(this) })
        )
      );
    }
  }]);

  return CoverageTable;
}(React.Component);

var el = document.querySelector('#coverage-table');
ReactDOM.render(React.createElement(CoverageTable, { gateway: el.getAttribute('data-gateway') }), el);
