'use strict';

const gatewayList = [{
  'name': 'stripe',
  'logo': 'img/logos/gateways/stripe.png',
  'description': 'Stripe is one of the go-to payment API families out there today. It has everything from one-off payments to peer-to-peer transactions.',
  'tags': [ 'Card payments', 'Subscriptions', 'Webhooks' ]
}, {
  'name': 'realex',
  'logo': 'img/logos/gateways/realex-logo.png',
  'description': 'Realex offers a steady API for e-commerce transactions. You can either do a direct integration or use their hosted pages (HPP) solution.',
  'tags': [ 'Realex', '3D secure', 'Hosted Pages' ]
}, {
  'name': 'authipay',
  'logo': 'img/logos/gateways/authipay.png',
  'description': 'Authipay is AIB Merchant Services\' full offering, allowing you to do everything from simple, recurring card and bank transactions.',
  'tags': [ 'Hosted Pages', 'Card payments', 'DCC', 'MCC' ]
}, {
  'name': 'adyen',
  'logo': 'img/logos/gateways/adyen-logo.png',
  'description': 'JSON API for card payments, including the 3D secure flow for enrolled cards. On top of the e-commerce APIS Adyen offers physical terminals as well as virtual ones for their merchants.',
  'tags': [ 'Authorise', '3D secure' ]
}, {
  'name': 'apco-pay',
  'logo': 'img/logos/gateways/apco_pay-logo.png',
  'description': 'Hosted payment pages where you have control over the form\'s look and feel as well as the information you ask for on top of the regular payment fields.',
  'tags': [ 'Authorise', '3D secure' ]
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
        <SearchBar searchTerm={this.state.searchTerm} onUpdate={this.onUpdateSearchTerm.bind(this)}/>
        <GatewaysList gateways={this.state.gateways}/>
      </div>
    );
  }
}

const e = React.createElement;
const domContainer = document.querySelector('#supported-gateways');
ReactDOM.render(e(SupportedGateways), domContainer);
