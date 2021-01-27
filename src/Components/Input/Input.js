import React from 'react';
import "./Input.css";

function Input(props) {
  const {onChangeHandler} = props;
  const {labelText, placeholderText, inputId} = props.data;

  return (
    <div className="registration-form-input margin-left margin-top">
      <label htmlFor={inputId}>
        {labelText}
      </label>

      <input type="text" className="input-field" 
        onChange={onChangeHandler}
        placeholder={placeholderText}
        id={inputId}
      />

      <div className="invalid-message">
        {/* TODO: Add message here */}
      </div>
    </div>
  )
}

export default Input;