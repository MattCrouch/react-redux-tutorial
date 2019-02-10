import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

export const TextInput = ({
  label,
  meta: { error, invalid, touched },
  input: { onChange, value }
}) => {
  const showError = invalid && touched;

  return (
    <div className={`text-input ${showError && "text-input--error"}`}>
      <label
        className={`text-input__label ${showError &&
          "text-input__label--error"}`}
      >
        {label}
        <input
          className={`text-input__input ${showError &&
            "text-input__input--error"}`}
          onChange={onChange}
          type="text"
          value={value}
        />
      </label>
      {showError && <span className="text-input__error">{error}</span>}
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    error: PropTypes.string,
    invalid: PropTypes.bool.isRequired,
    touched: PropTypes.bool.isRequired
  }),
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
  })
};

export default TextInput;
