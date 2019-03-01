export var SearchBar = function SearchBar(_ref) {
  var _ref$searchTerm = _ref.searchTerm,
      searchTerm = _ref$searchTerm === undefined ? '' : _ref$searchTerm,
      onChange = _ref.onChange,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? '' : _ref$title;

  return React.createElement(
    'section',
    { id: 'searchbar', className: 'dark-background' },
    React.createElement(
      'div',
      { className: 'container' },
      React.createElement(
        'div',
        { className: 'row' },
        React.createElement(
          'div',
          { className: 'col col-sm-6 mx-auto py-3' },
          React.createElement(
            'h4',
            { className: 'text-white text-center font-weight-light' },
            title
          ),
          React.createElement('input', { className: 'form-control', value: searchTerm, onChange: onChange })
        )
      )
    )
  );
};