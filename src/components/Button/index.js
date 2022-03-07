import Icon from 'components/Icon';

const LoadingIcon = () => (
  <span className="button__spinner">
    <Icon type="spinner" />
  </span>
);

function Button(props) {
  const { className, children, onClick, variant, disabled, loading, size, type = 'button' } = props;

  let buttonClassName = 'button ';

  if (variant) {
    buttonClassName += ` button--${variant} `;
  }

  if (size) {
    buttonClassName += ` button--${size}`;
  }

  if (loading) {
    buttonClassName += ' button--loading ';
  }

  if (className) {
    buttonClassName += className;
  }

  return (
    <button type={type} className={buttonClassName} onClick={onClick} disabled={disabled}>
      {loading && <LoadingIcon />}
      <span>{children}</span>
    </button>
  );
}

export default Button;
