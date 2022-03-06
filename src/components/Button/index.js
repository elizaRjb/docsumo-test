function Button(props) {
  const {
    className,
    children,
    onClick,
    variant,
    disabled,
    size,
    type = "button",
  } = props;

  let buttonClassName = "button ";

  if (variant) {
    buttonClassName += ` button--${variant} `;
  }

  if (size) {
    buttonClassName += ` button--${size}`;
  }

  if (className) {
    buttonClassName += className;
  }

  return (
    <button
      type={type}
      className={buttonClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
