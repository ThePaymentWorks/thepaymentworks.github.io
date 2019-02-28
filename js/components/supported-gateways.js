var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { gatewayList } from './config/supported-gateways.js';

var SearchBar = function SearchBar(_ref) {
  var _ref$searchTerm = _ref.searchTerm,
      searchTerm = _ref$searchTerm === undefined ? '' : _ref$searchTerm,
      onUpdate = _ref.onUpdate;

  return React.createElement(
    'section',
    { id: 'supported-gateways', className: 'dark-background' },
    React.createElement(
      'div',
      { className: 'container' },
      React.createElement(
        'div',
        { className: 'row' },
        React.createElement(
          'div',
          { className: 'col col-sm-6 mx-auto py-3' },
          React.createElement(
            'h4',
            { className: 'text-white text-center font-weight-light' },
            'Search supported simulators'
          ),
          React.createElement('input', { className: 'form-control', value: searchTerm, onChange: onUpdate })
        )
      )
    )
  );
};

var GatewayLink = function GatewayLink(link) {
  var hasLink = link != '#';
  var textColor = hasLink ? 'text-primary' : 'text-gray';

  return React.createElement(
    'a',
    { href: link, className: 'border-top light-background d-flex flex-row justify-content-between p-2' },
    React.createElement(
      'span',
      { className: textColor },
      hasLink ? 'View Guides' : 'Guides Coming Soon'
    ),
    React.createElement(
      'span',
      { className: textColor },
      React.createElement('i', { className: 'fas fa-arrow-right' })
    )
  );
};

var GatewayListItem = function GatewayListItem(_ref2) {
  var logo = _ref2.logo,
      description = _ref2.description,
      _ref2$link = _ref2.link,
      link = _ref2$link === undefined ? '#' : _ref2$link,
      _ref2$tags = _ref2.tags,
      tags = _ref2$tags === undefined ? [] : _ref2$tags;

  return React.createElement(
    'div',
    { className: 'col col-sm-4 py-3 mx-auto mt-4', style: { maxWidth: '300px' } },
    React.createElement(
      'div',
      { className: 'card shadow border-none d-flex flex-column' },
      React.createElement(
        'div',
        { className: 'card border-none shadow mx-4 mb-2', style: { marginTop: '-1rem' } },
        React.createElement('img', { src: logo, className: 'contain-img p-1', height: '45px' })
      ),
      React.createElement(
        'div',
        { className: 'mx-2 overflow-hidden', style: { whiteSpace: 'nowrap', textOverflow: 'elipsis' } },
        tags.map(function (t, i) {
          return React.createElement(
            'small',
            { key: i, className: 'pr-2' },
            '#',
            t
          );
        })
      ),
      React.createElement(
        'div',
        { className: 'm-2 overflow-hidden', style: { height: '6rem' } },
        description
      ),
      GatewayLink(link)
    )
  );
};

var GatewaysList = function GatewaysList(_ref3) {
  var _ref3$gateways = _ref3.gateways,
      gateways = _ref3$gateways === undefined ? [] : _ref3$gateways;

  return React.createElement(
    'section',
    { id: 'gateways' },
    React.createElement(
      'div',
      { className: 'container' },
      React.createElement(
        'div',
        { className: 'row' },
        gateways.map(function (props, i) {
          return React.createElement(GatewayListItem, Object.assign({ key: i }, props));
        })
      )
    )
  );
};

var SupportedGateways = function (_React$Component) {
  _inherits(SupportedGateways, _React$Component);

  function SupportedGateways(props) {
    _classCallCheck(this, SupportedGateways);

    var _this = _possibleConstructorReturn(this, (SupportedGateways.__proto__ || Object.getPrototypeOf(SupportedGateways)).call(this, props));

    _this.state = {
      searchTerm: '',
      gateways: gatewayList
    };
    return _this;
  }

  _createClass(SupportedGateways, [{
    key: 'onUpdateSearchTerm',
    value: function onUpdateSearchTerm(event) {
      var searchTerm = event.target.value;
      this.setState({ searchTerm: searchTerm });

      if (searchTerm && searchTerm.replace(/ /g, '')) {
        var filterRegex = new RegExp(searchTerm.toLowerCase());

        var filteredGateways = gatewayList.filter(function (gateway) {
          return (

            // For all keys in a gateway check if its value matches the
            // search term. If it does return the name of the key.
            // Then if the number of key names retruned is greater than
            // 0, we know there is a match for that gateway object.
            // Therefore we keep it in the list
            Object.keys(gateway).filter(function (a) {

              // We need this first if statement to deal with the tags array
              if (Array.isArray(gateway[a]) === true) {
                return gateway[a].filter(function (i) {
                  return i.toLowerCase().match(filterRegex);
                }).length > 0;
              } else {
                return typeof gateway[a] === 'string' && gateway[a].toLowerCase().match(filterRegex);
              }
            }).length > 0
          );
        });

        this.setState({ gateways: filteredGateways });
      } else {
        // Reset the list of gateways when there is no input
        this.setState({ gateways: gatewayList });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(SearchBar, { searchTerm: this.state.searchTerm, onUpdate: this.onUpdateSearchTerm.bind(this) }),
        React.createElement(GatewaysList, { gateways: this.state.gateways })
      );
    }
  }]);

  return SupportedGateways;
}(React.Component);

var e = React.createElement;
var domContainer = document.querySelector('#supported-gateways');
ReactDOM.render(e(SupportedGateways), domContainer);