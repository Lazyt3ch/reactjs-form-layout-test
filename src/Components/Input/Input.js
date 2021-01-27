import React from 'react';
import "./Input.css";

function Input(props) {
  const {labelText, placeholderText, onChangeHandler, inputId} = props;

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
    </div>
  )
}

export default Input;