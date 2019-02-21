'use strict';

const gatewayList = [{
  'name': 'stripe',
  'logo': 'img/logos/authipay.png',
  'description': 'Icing icing pie tootsie roll sesame snaps tiramisu sweet roll. Caramels dragée topping. Tart apple pie sweet. Caramels dragée topping. Tart apple pie sweet.',
  'tags': [ 'Stripe', 'DCC', 'MCC' ]
}, {
  'name': 'realex',
  'logo': 'img/logos/authipay.png',
  'description': 'Icing icing pie tootsie roll sesame snaps tiramisu sweet roll. Caramels dragée topping. Tart apple pie sweet. Caramels dragée topping. Tart apple pie sweet.',
  'tags': [ 'Realex', 'DCC', 'MCC' ]
}, {
  'name': 'authipay',
  'logo': 'img/logos/authipay.png',
  'description': 'Icing icing pie tootsie roll sesame snaps tiramisu sweet roll. Caramels dragée topping. Tart apple pie sweet. Caramels dragée topping. Tart apple pie sweet.',
  'tags': [ 'Billing', 'DCC', 'MCC' ]
}, {
  'name': 'authipay',
  'logo': 'img/logos/authipay.png',
  'description': 'Icing icing pie tootsie roll sesame snaps tiramisu sweet roll. Caramels dragée topping. Tart apple pie sweet. Caramels dragée topping. Tart apple pie sweet.',
  'tags': [ 'Billing', 'DCC', 'MCC' ]
}];

const SearchBar = function ({searchTerm = '', onUpdate}) {
  return (
    <section id="supported-gateways" className="dark-background">
      <div className="container">
        <div className="row">
          <div className="col col-sm-6 mx-auto py-3">
            <h4 className="text-white text-center font-weight-light">
              Search supported simulators
            </h4>
            <input className="form-control" value={searchTerm} onChange={onUpdate} />
          </div>
        </div>
      </div>
    </section>
  );
};

const GatewayListItem = function ({ logo, description, link = '#', tags = [] }) {
  return (
    <div className="col col-sm-4 py-3 mx-auto mt-4" style={{maxWidth: '300px'}}>
      <div className="card shadow border-none d-flex flex-column">

        <div className="card border-none shadow mx-4 mb-2" style={{marginTop: '-1rem'}}>
          <img src={logo} className="contain-img p-1" height="45px" />
        </div>

        <div className="px-2">
          {tags.map((t, i) => <small key={i} className="px-1">#{t}</small>)}
        </div>

        <div className="p-2">
          <span>{description}</span>
        </div>

        <a href={link} className="border-top light-background d-flex flex-row justify-content-between p-2">
          <span>View Guides</span>
          <span className="text-primary"><i className="fas fa-arrow-right"></i></span>
        </a>

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
        Object.keys(gateway).filter(a => {
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

  filterByTerm(collection, searchTerm) {
  }

  render() {
    return (
      <div>
        <SearchBar searchTerm={this.state.searchTerm} onUpdate={this.onUpdateSearchTerm.bind(this)}/>
        <GatewaysList gateways={this.state.gateways}/>
      </div>
    );
  }
}

const e = React.createElement;
const domContainer = document.querySelector('#supported-gateways');
ReactDOM.render(e(SupportedGateways), domContainer);
