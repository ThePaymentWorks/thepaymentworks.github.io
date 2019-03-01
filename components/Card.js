export const Card = function (props) {
  const { className = '', children, onClick = () => {}} = props;
  return (
    <div className={"card shadow border-none d-flex flex-column ".concat(className)} onClick={props.onClick}>
      {children}
    </div>
  );
}
