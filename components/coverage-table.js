import { CoverageTables } from './config/coverage-tables.js';

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

const CellContent = function ({type, content}) {
  switch(type) {
    case 'na':
      return <div className="w-100 text-center"><small className="text-gray-light font-weight-light">{content}</small></div>;
    case 'vote':
      return <div className="w-100 text-center"><small className="text-gray font-weight-light">{content}</small></div>;
    case 'covered':
      return <i className="w-100 text-primary fas fa-check"></i>;
    case 'goldEndpoint':
      return (
        <span className="fa-stack fa-1x w-100 h-100">
          <i className="w-100 text-primary fas fa-certificate fa-stack-2x"></i>
          <i className="w-100 text-white fas fa-check fa-stack-1x"></i>
        </span>
      );
    default:
      return <div className="w-100 text-center"><small className="text-gray-light font-weight-light">{content}</small></div>;
  }
};

const Cell = function ({ isActive, setActiveCell, cell }) {
  const { endpoint, type, content } = cell;

  return (
    <td className={isActive ? 'activeCell' : ''} onClick={setActiveCell(cell).bind(this)}>
      <CellContent type={type} content={content} />
    </td>
  );
};

const XAxisHeadings = function ({ xAxis, yAxis }) {
  if (!xAxis.hasHeadings) return;

  return (
    <tr>
      { yAxis.hasHeadings ? <th></th> : '' }
      { xAxis.headings.map(h => <th className="text-center text-gray">{h}</th>) }
    </tr>
  );
}

const EnquiryForm = function ({ onSubmit, email, body, handleChange }) {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label className="control-label">From: </label>
        <input id="new-enquiry-email" className="form-control" type="text" value={email} onChange={handleChange('email')}/>
      </div>
      <div className="form-group ">
        <label for="custom_response" className="control-label">Suggestion:</label>
        <textarea id="new-enquiry-text" rows="10" placeholder="Hey, I noticed you don't have a sim for..." maxlength="500" className="form-control" value={body} onChange={handleChange('body')}></textarea>
      </div>

      <div className="d-flex justify-content-end">
        <button type="button" className="btn btn-secondary mr-auto" data-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
  </form>
  );
}

const Modal = function ({ title, children }) {
  return (
    <div className="modal fade" id="voteModal" tabindex="-1" role="dialog" aria-labelledby="voteModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header text-white dark-background">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" className="text-white">&times;</span>
            </button>
          </div>

          <div className="modal-body">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

const EndpointDescription = function ({show, endpoint}) {
  if (!(show && endpoint)) return '';

  const { description, type } = endpoint;
  const { title = '', text = '' } = getEndpointDescription(type, description);

  return (
    <div className="col" style={{minHeight: '12rem'}}>
      <div className="container-fluid card shadow mt-3 border-none overflow-none">
        <div className="row">
          <div className="col light-background py-2">
            <b>{title}</b>
          </div>
        </div>

        <div className="row">
          <div className="col py-2">
            <p>{text}</p>
            { type === 'vote' ? <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#voteModal">Vote</button> : ''}
          </div>
        </div>
      </div>
    </div>
  );
}

class CoverageTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      table: CoverageTables[props.gateway],

      showEndpointDescription: false,
      showVoteModal: false,

      activeCell: null,

      email: '',
      body: '',
    };
  }

  setActiveCell(activeCell) {
    return e => {
      console.log('setting active cell', activeCell);
      // Update the state with the current cells description
      this.setState({
        showEndpointDescription: true,
        activeCell,
      });
    }
  }

  submitVote(e) {
    e.preventDefault();

    const data = {
      email: this.state.email,
      text: this.state.body,
      category: 'sim-coverage',
      metadata: { endpoint: this.state.activeCell.endpoint }
    };

    fetch('https://admin-api.testingpays.com/public_enquiry', {
      method: 'POST',
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify(data),
    });

    $('#voteModal').modal('toggle');
  }

  handleChange(name) {
    return e => this.setState({ [name]: e.target.value });
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
                <XAxisHeadings xAxis={xAxis} yAxis={yAxis} />
                { rows.map((row, index) => (
                  <tr>
                    {yAxis.hasHeadings
                      ? <td class="text-right text-gray">{yAxis.headings[index]}</td>
                      : ''
                    }
                    { row.map(cell => {
                        const activeCell = this.state.activeCell;
                        const isActive = (activeCell && activeCell.endpoint && activeCell.endpoint === cell.endpoint);
                        return <Cell isActive={isActive} setActiveCell={this.setActiveCell.bind(this)} cell={cell}/>
                      })
                    }
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <EndpointDescription endpoint={this.state.activeCell} show={this.state.showEndpointDescription}/>
        </div>

        <Modal title="Vote for simulator">
          <EnquiryForm onSubmit={this.submitVote.bind(this)} email={this.state.email} body={this.state.body} handleChange={this.handleChange.bind(this)} />
        </Modal>
      </div>
    );
  }
}

const el = document.querySelector('#coverage-table');
ReactDOM.render(<CoverageTable gateway={el.getAttribute('data-gateway')}/>, el);
