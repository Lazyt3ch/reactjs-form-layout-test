import React from 'react';
import "./Select.css";

function Select(props) {
    const {invalidMessage, onChangeHandler} = props;
    const {labelText, defaultText, options, inputId } = props.data;
  
    return (
      <div className="registration-form-input margin-left margin-top">
        <label htmlFor={inputId}>
          {labelText}
        </label>
  
        <select>

        </select>
  
        <div className="invalid-message">
          {/* TODO: Add message here */}
          {invalidMessage}
        </div>
      </div>
    )
  }
  
  export default Select;