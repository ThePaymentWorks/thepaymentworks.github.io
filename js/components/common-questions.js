var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { ListOfCommonQuestions } from './config/common-questions.js';

var CommonQuestions = function (_React$Component) {
  _inherits(CommonQuestions, _React$Component);

  function CommonQuestions(props) {
    _classCallCheck(this, CommonQuestions);

    var _this = _possibleConstructorReturn(this, (CommonQuestions.__proto__ || Object.getPrototypeOf(CommonQuestions)).call(this, props));

    var gateway = props.gateway || 'none';
    var singular = props.singular;
    var plural = props.plural || props.singular;

    _this.state = {
      questions: _this.getAllQuestions(gateway, singular, plural),
      gateway: gateway,
      singular: singular,
      plural: plural
    };
    return _this;
  }

  _createClass(CommonQuestions, [{
    key: 'getAllQuestions',
    value: function getAllQuestions(gateway) {
      var singular = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var plural = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

      var general = ListOfCommonQuestions.general || [];
      var gatewayQuestions = ListOfCommonQuestions[gateway] || [];

      var questionsWithGatewayNames = general.map(function (_ref) {
        var question = _ref.question,
            answer = _ref.answer;

        var q = question.replace(/\$plural/, plural).replace(/\$singular/, singular);
        var a = answer.replace(/\$plural/, plural).replace(/\$singular/, singular);

        return { question: q, answer: a };
      });

      return questionsWithGatewayNames.concat(gatewayQuestions);
    }
  }, {
    key: 'render',
    value: function render() {
      var questions = this.state.questions;
      var splitQuestionsIndex = Math.ceil(questions.length / 2);

      return React.createElement(
        'section',
        { className: 'd-flex flex-wrap justify-content-center white-background py-4' },
        React.createElement(
          'div',
          { className: 'col-12 col-sm-6 col-md-5 col-lg-4' },
          React.createElement(QuestionsList, { questions: questions.slice(0, splitQuestionsIndex) })
        ),
        React.createElement(
          'div',
          { className: 'col-12 col-sm-6 col-md-5 col-lg-4' },
          React.createElement(QuestionsList, { questions: questions.slice(splitQuestionsIndex) })
        )
      );
    }
  }]);

  return CommonQuestions;
}(React.Component);

var QuestionsList = function QuestionsList(_ref2) {
  var questions = _ref2.questions;

  return questions.map(function (_ref3) {
    var question = _ref3.question,
        answer = _ref3.answer;
    return React.createElement(
      'div',
      { className: 'mt-4' },
      React.createElement('h4', { dangerouslySetInnerHTML: { __html: question } }),
      React.createElement('p', { dangerouslySetInnerHTML: { __html: answer } })
    );
  });
};

var el = document.querySelector('#common-questions');

var gateway = el.getAttribute('data-gateway');
var singular = el.getAttribute('data-singular');
var plural = el.getAttribute('data-plural');

ReactDOM.render(React.createElement(CommonQuestions, { gateway: gateway, singular: singular, plural: plural }), el);