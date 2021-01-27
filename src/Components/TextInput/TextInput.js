import React from 'react';
import "./TextInput.css";

function TextInput(props) {
  const {
    labelText, 
    placeholderText, 
    inputId, 
    invalidMessage, 
    onChangeHandler
  } = props.data;

  return (
    <div className="registration-form-input margin-left margin-top">
      <label htmlFor={inputId}>
        {labelText}
      </label>

      <input type="text" 
        onChange={onChangeHandler}
        placeholder={placeholderText}
        id={inputId}
      />

      <div className="invalid-message">
        {/* TODO: Add message here */}
        {invalidMessage}
      </div>
    </div>
  )
}

export default TextInput;