import { ListOfCommonQuestions } from './config/common-questions.js';

class CommonQuestions extends React.Component {
  constructor(props) {
    super(props);

    const gateway = props.gateway || 'none';
    const singular = props.singular;
    const plural = props.plural || props.singular;

    this.state = {
      questions: this.getAllQuestions(gateway, singular, plural),
      gateway,
      singular,
      plural,
    };
  }

  getAllQuestions(gateway, singular = '', plural = '') {
    const general = ListOfCommonQuestions.general || [];
    const gatewayQuestions = ListOfCommonQuestions[gateway] || [];

    const questionsWithGatewayNames = general.map(({ question, answer }) => {
      const q = question.replace(/\$plural/, plural).replace(/\$singular/, singular);
      const a = answer.replace(/\$plural/, plural).replace(/\$singular/, singular);

      return { question: q, answer: a };
    });

    return questionsWithGatewayNames.concat(gatewayQuestions);
  }

  render() {
    const questions = this.state.questions;
    const splitQuestionsIndex = Math.ceil(questions.length / 2 );

    return (
      <section className="d-flex flex-wrap justify-content-center white-background py-4">
        <div className="col-12 col-sm-6 col-md-5 col-lg-4">
          <QuestionsList questions={questions.slice(0, splitQuestionsIndex)} />
        </div>

        <div className="col-12 col-sm-6 col-md-5 col-lg-4">
          <QuestionsList questions={questions.slice(splitQuestionsIndex)} />
        </div>
      </section>
    );
  }
}

const QuestionsList = function ({questions}) {
  return questions.map(({question, answer}) => (
    <div className="mt-4">
      <h4 dangerouslySetInnerHTML={{ __html: question }} />
      <p dangerouslySetInnerHTML={{ __html: answer }} />
    </div>
  ));
}

const el = document.querySelector('#common-questions');

const gateway = el.getAttribute('data-gateway');
const singular = el.getAttribute('data-singular');
const plural = el.getAttribute('data-plural');

ReactDOM.render(<CommonQuestions gateway={gateway} singular={singular} plural={plural} />, el);
