import { gatewayList } from './config/supported-gateways.js';
import { SearchBar } from './SearchBar.js';

const GatewayLink = function(link) {
  const hasLink = link != '#';
  const textColor = hasLink ? 'text-primary' : 'text-gray';

  return(
    <a href={link} className="border-top light-background d-flex flex-row justify-content-between p-2">
      <span className={textColor}>{hasLink ? 'View Guides' : 'Guides Coming Soon'}</span>
      <span className={textColor}><i className="fas fa-arrow-right"></i></span>
    </a>
  );
};

const GatewayListItem = function ({ logo, description, link = '#', tags = [] }) {
  return (
    <div className="col col-sm-4 py-3 mx-auto mt-4" style={{maxWidth: '300px'}}>
      <div className="card shadow border-none d-flex flex-column">

        <div className="card border-none shadow mx-4 mb-2" style={{marginTop: '-1rem'}}>
          <img src={logo} className="contain-img p-1" height="45px" />
        </div>

        <div className="mx-2 overflow-hidden" style={{whiteSpace: 'nowrap', textOverflow: 'elipsis'}}>
          {tags.map((t, i) => <small key={i} className="pr-2">#{t}</small>)}
        </div>

        <div className="m-2 overflow-hidden" style={{height: '6rem'}}>
          {description}
        </div>

        {GatewayLink(link)}

      </div>
    </div>
  );
};

const GatewaysList = function ({ gateways = [] }) {
  return (
    <section id="gateways">
      <div className="container">
        <div className="row">
          {gateways.map((props, i) => <GatewayListItem key={i} {...props} />)}
        </div>
      </div>
    </section>
  );
};


class SupportedGateways extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      gateways: gatewayList,
    };
  }

  onUpdateSearchTerm(event) {
    const searchTerm = event.target.value;
    this.setState({searchTerm});

    if (searchTerm && searchTerm.replace(/ /g,'')) {
      const filterRegex = new RegExp(searchTerm.toLowerCase());

      const filteredGateways = gatewayList.filter(gateway => (

        // For all keys in a gateway check if its value matches the
        // search term. If it does return the name of the key.
        // Then if the number of key names retruned is greater than
        // 0, we know there is a match for that gateway object.
        // Therefore we keep it in the list
        Object.keys(gateway).filter(a => {

          // We need this first if statement to deal with the tags array
          if (Array.isArray(gateway[a]) === true) {
            return gateway[a].filter(i => i.toLowerCase().match(filterRegex)).length > 0;

          } else {
            return (typeof gateway[a] === 'string') && gateway[a].toLowerCase().match(filterRegex)
          }
        }).length > 0
      ));

      this.setState({gateways: filteredGateways});
    } else {
      // Reset the list of gateways when there is no input
      this.setState({gateways: gatewayList});
    }
  }

  render() {
    return (
      <div>
        <SearchBar title="Search our Guides" searchTerm={this.state.searchTerm} onChange={this.onUpdateSearchTerm.bind(this)}/>
        <GatewaysList gateways={this.state.gateways}/>
      </div>
    );
  }
}

const e = React.createElement;
const domContainer = document.querySelector('#guides-list');
ReactDOM.render(e(SupportedGateways), domContainer);
