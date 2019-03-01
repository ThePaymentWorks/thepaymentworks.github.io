export const SearchBar = function ({searchTerm = '', onChange, title = ''}) {
  return (
    <section id="supported-gateways" className="dark-background">
      <div className="container">
        <div className="row">
          <div className="col col-sm-6 mx-auto py-3">
            <h4 className="text-white text-center font-weight-light">
              {title}
            </h4>
            <input className="form-control" value={searchTerm} onChange={onChange} />
          </div>
        </div>
      </div>
    </section>
  );
};
