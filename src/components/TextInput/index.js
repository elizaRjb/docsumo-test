import React, { useState } from "react";

function TextInput(props) {
  const {
    className,
    name,
    value,
    onChange,
    label,
    errorMsg,
    disabled,
    type = "text",
  } = props;
  const [isActive, setIsActive] = useState(false);
  
  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    if (value) {
      return;
    }
    setIsActive(false);
  };

  const labelClassName = isActive
    ? "text-input__label text-input__label--active"
    : "text-input__label";

  return (
    <div className={`text-input ${className ? className : ""}`}>
      <label className={labelClassName}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
      />
      <span className="text-input__error-msg">{errorMsg}</span>
    </div>
  );
}

export default TextInput;
