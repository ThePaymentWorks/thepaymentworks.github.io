export var Card = function Card(props) {
  var _props$className = props.className,
      className = _props$className === undefined ? '' : _props$className,
      children = props.children,
      _props$onClick = props.onClick,
      onClick = _props$onClick === undefined ? function () {} : _props$onClick;

  return React.createElement(
    "div",
    { className: "card shadow border-none d-flex flex-column ".concat(className), onClick: props.onClick },
    children
  );
};