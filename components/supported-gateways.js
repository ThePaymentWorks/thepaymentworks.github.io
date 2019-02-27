'use strict';

const gatewayList = [{
  'name': 'stripe',
  'logo': 'img/logos/gateways/stripe.png',
  'description': 'Stripe is one of the go-to payment API families out there today. It has everything from one-off payments to peer-to-peer transactions.',
  'tags': [ 'Card payments', 'Subscriptions', 'Webhooks' ],
  'link': '/sims/stripe'
}, {
  'name': 'realex',
  'logo': 'img/logos/gateways/realex-logo.png',
  'description': 'Realex offers a steady API for e-commerce transactions. You can either do a direct integration or use their hosted pages (HPP) solution.',
  'tags': [ 'Realex', '3D secure', 'Hosted Pages' ],
  'link': '/sims/realex'
}, {
  'name': 'authipay',
  'logo': 'img/logos/gateways/authipay.png',
  'description': 'Authipay is AIB Merchant Services\' full offering, allowing you to do everything from simple, recurring card and bank transactions.',
  'tags': [ 'Hosted Pages', 'Card payments', 'DCC', 'MCC' ],
  'link': '/authipay/docs/welcome'
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
}, {
  'name': 'experian',
  'logo': 'img/logos/gateways/experian-logo.png',
  'description': 'Used for know-your-customer (a.k.a. KYC) type queries, ID and address verification.',
  'tags': [ 'ID check', 'KYC' ]
}, {
  'name': 'trulioo',
  'logo': 'img/logos/gateways/trulioo-logo.png',
  'description': 'Used for know-your-customer (a.k.a. KYC) type queries, ID and address verification.',
  'tags': [ 'ID check', 'KYC' ]
}, {
  'name': 'instadebit',
  'logo': 'img/logos/gateways/instadebit-logo.png',
  'description': 'Make transactions and payouts both with cards and ACH (Automated Clearing House) for US and Canada based payments.',
  'tags': [ 'ACH', 'E-checks', 'Card payments' ]
}, {
  'name': 'neteller',
  'logo': 'img/logos/gateways/neteller-logo.png',
  'description': 'Popular E-Wallet solution, used widely especially in the gaming industry',
  'tags': [ 'E-Wallet', 'Card payments' ]
}, {
  'name': 'optimal',
  'logo': 'img/logos/gateways/optimal-logo.png',
  'description': 'Part of the PaysafeCard API offerings. online payments on a global scale.',
  'tags': [ 'E-Commerce', 'Card payments' ]
}, {
  'name': 'paypal',
  'logo': 'img/logos/gateways/paypal-logo.png',
  'description': 'PayPal is one of the payment veterans, with customer and merchant accounts, hosted and API card payments',
  'tags': [ 'Peer-to-peer', 'Card payments', 'Bank transfer' ],
  'link': '/sims/paypal-express'
}, {
  'name': 'perfect-card',
  'logo': 'img/logos/gateways/perfect_card-logo.png',
  'description': 'Virtual cards for all types of e-commerce transactions. Perfect Card can give you a virtual Visa or Mastercard to use on any other site.',
  'tags': [ 'Virtual Card', 'Card payments' ],
  'link': '/perfect-card/docs/welcome'
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

const GatewayLink = function(link) {
  if (link != '#') {
    return(
        <a href={link} className="border-top light-background d-flex flex-row justify-content-between p-2">
          <span>View Guides</span>
          <span className="text-primary"><i className="fas fa-arrow-right"></i></span>
        </a>
        );
  } else {
    return '';
  }
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
        <SearchBar searchTerm={this.state.searchTerm} onUpdate={this.onUpdateSearchTerm.bind(this)}/>
        <GatewaysList gateways={this.state.gateways}/>
      </div>
    );
  }
}

const e = React.createElement;
const domContainer = document.querySelector('#supported-gateways');
ReactDOM.render(e(SupportedGateways), domContainer);
