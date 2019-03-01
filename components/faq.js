import { faqs } from './config/faqs.js';
import { SearchBar } from './SearchBar.js';
import { Card } from './Card.js';

class FAQ extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gateway: props.gateway,
      faq: faqs[props.gateway],
      searchTerm: '',
    };
  }

  updateSearchTerm(e) {
    const searchTerm = e.target.value;
    this.setState({ searchTerm, });

    if (searchTerm && searchTerm.replace(/ /g,'')) {
      const filterRegex = new RegExp(searchTerm.toLowerCase());
      const faq = faqs[this.state.gateway];

      const filteredFaq = faq.filter(f => (
        Object.keys(f).filter(a => (
          typeof f[a] === 'string') && f[a].toLowerCase().match(filterRegex)
        ).length > 0
      ));

      this.setState({faq: filteredFaq});
    } else {
      // Reset the list of gateways when there is no input
      this.setState({faq: faqs[props.gatewayList]});
    }
  }

  render() {
    const searchTerm = this.state.searchTerm;
    const updateSearchTerm = this.updateSearchTerm.bind(this);
    const faq = this.state.faq;

    return (
      <div>
        <SearchBar
          title="Search our FAQ"
          searchTerm={searchTerm}
          onChange={updateSearchTerm} />

        <FaqList faq={faq} className="my-4"/>
      </div>
    );
  }
}

const FaqList = function ({ faq, className = '' }) {
  return (
    <div className={`container ${className}`}>
      <div className="row">
        <div class="mx-auto col col-sm-10 col-lg-8 col-xl-6">
          {faq.map(f => <FaqItem question={f.question} answer={f.answer}/>)}
        </div>
      </div>
    </div>
  );
}

class FaqItem extends React.Component {
  constructor(props) {
    super(props);

    const { question, answer } = props;

    this.state = {
      expand: false,
      question,
      answer,
    };
  }

  toggleExpand(/* e */) {
    this.setState({ expand: !this.state.expand, });
  }

  shortAnswer(answer) {
    const splitAnswer = answer.split('</p>')[0].replace(/<\/?[^>]+(>|$)/g, '');
    const dots = answer.split('</p>').length > 1 ? '...' : '';
    return `
      <p class="overflow-hidden text-nowrap text-truncate mb-0">
        ${splitAnswer}${dots}
      </p>
    `;
  }

  render() {
    const { question, answer, expand } = this.state;
    const shortAnswer = this.shortAnswer(answer);

    return (
      <Card className="my-4 border" onClick={this.toggleExpand.bind(this)}>
        <div key={expand} className="border-bottom d-flex flex-row p-3 light-background">
          <i className="fas fa-question my-auto mr-3 text-primary"></i>
          <p className="my-auto">{question}</p>
          <i className={`fas fa-chevron-${expand ? 'up' : 'down'} my-auto ml-auto text-primary`}></i>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: expand ? answer : shortAnswer }}
          className="m-3 text-gray"/>
      </Card>
    );
  }
}

const el = document.querySelector('#faq');
ReactDOM.render(<FAQ gateway={el.getAttribute('data-gateway')}/>, el);
