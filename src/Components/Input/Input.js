import React from 'react';
import "./Input.css";

function Input(props) {
  const {labelText, placeholderText, onChangeHandler, inputId} = props;

  return (
    <div className="registration-form-input">
      <label htmlFor={inputId}>
        {labelText}
      </label>

      <input type="text" 
        onChange={onChangeHandler}
        placeholder={placeholderText}>
        id={inputId}
      </input>
    </div>
  )
}

export default Input;