var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { faqs } from './config/faqs.js';
import { SearchBar } from './SearchBar.js';
import { Card } from './Card.js';

var FAQ = function (_React$Component) {
  _inherits(FAQ, _React$Component);

  function FAQ(props) {
    _classCallCheck(this, FAQ);

    var _this = _possibleConstructorReturn(this, (FAQ.__proto__ || Object.getPrototypeOf(FAQ)).call(this, props));

    _this.state = {
      gateway: props.gateway,
      faq: faqs[props.gateway],
      searchTerm: ''
    };
    return _this;
  }

  _createClass(FAQ, [{
    key: 'updateSearchTerm',
    value: function updateSearchTerm(e) {
      var searchTerm = e.target.value;
      this.setState({ searchTerm: searchTerm });

      if (searchTerm && searchTerm.replace(/ /g, '')) {
        var filterRegex = new RegExp(searchTerm.toLowerCase());
        var faq = faqs[this.state.gateway];

        var filteredFaq = faq.filter(function (f) {
          return Object.keys(f).filter(function (a) {
            return typeof f[a] === 'string' && f[a].toLowerCase().match(filterRegex);
          }).length > 0;
        });

        this.setState({ faq: filteredFaq });
      } else {
        // Reset the list of gateways when there is no input
        this.setState({ faq: faqs[props.gatewayList] });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var searchTerm = this.state.searchTerm;
      var updateSearchTerm = this.updateSearchTerm.bind(this);
      var faq = this.state.faq;

      return React.createElement(
        'div',
        null,
        React.createElement(SearchBar, {
          title: 'Search our FAQ',
          searchTerm: searchTerm,
          onChange: updateSearchTerm }),
        React.createElement(FaqList, { faq: faq, className: 'my-4' })
      );
    }
  }]);

  return FAQ;
}(React.Component);

var FaqList = function FaqList(_ref) {
  var faq = _ref.faq,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  return React.createElement(
    'div',
    { className: 'container ' + className },
    React.createElement(
      'div',
      { className: 'row' },
      React.createElement(
        'div',
        { 'class': 'mx-auto col col-sm-10 col-lg-8 col-xl-6' },
        faq.map(function (f) {
          return React.createElement(FaqItem, { question: f.question, answer: f.answer });
        })
      )
    )
  );
};

var FaqItem = function (_React$Component2) {
  _inherits(FaqItem, _React$Component2);

  function FaqItem(props) {
    _classCallCheck(this, FaqItem);

    var _this2 = _possibleConstructorReturn(this, (FaqItem.__proto__ || Object.getPrototypeOf(FaqItem)).call(this, props));

    var question = props.question,
        answer = props.answer;


    _this2.state = {
      expand: false,
      question: question,
      answer: answer
    };
    return _this2;
  }

  _createClass(FaqItem, [{
    key: 'toggleExpand',
    value: function toggleExpand() /* e */{
      this.setState({ expand: !this.state.expand });
    }
  }, {
    key: 'shortAnswer',
    value: function shortAnswer(answer) {
      var splitAnswer = answer.split('</p>')[0].replace(/<\/?[^>]+(>|$)/g, '');
      var dots = answer.split('</p>').length > 1 ? '...' : '';
      return '\n      <p class="overflow-hidden text-nowrap text-truncate mb-0">\n        ' + splitAnswer + dots + '\n      </p>\n    ';
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          question = _state.question,
          answer = _state.answer,
          expand = _state.expand;

      var shortAnswer = this.shortAnswer(answer);

      return React.createElement(
        Card,
        { className: 'my-4 border', onClick: this.toggleExpand.bind(this) },
        React.createElement(
          'div',
          { key: expand, className: 'border-bottom d-flex flex-row p-3 light-background' },
          React.createElement('i', { className: 'fas fa-question my-auto mr-3 text-primary' }),
          React.createElement(
            'p',
            { className: 'my-auto' },
            question
          ),
          React.createElement('i', { className: 'fas fa-chevron-' + (expand ? 'up' : 'down') + ' my-auto ml-auto text-primary' })
        ),
        React.createElement('div', {
          dangerouslySetInnerHTML: { __html: expand ? answer : shortAnswer },
          className: 'm-3 text-gray' })
      );
    }
  }]);

  return FaqItem;
}(React.Component);

var el = document.querySelector('#faq');
ReactDOM.render(React.createElement(FAQ, { gateway: el.getAttribute('data-gateway') }), el);