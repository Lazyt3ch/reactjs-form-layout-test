import React from 'react';
import "./Input.css";

function Input(props) {
  const {labelText, placeholderText, onChangeHandler} = props;

  return (
    <div className="registration-form-input">
      <label>
        {labelText}
      </label>
      
      <input type="text" 
        onChange={onChangeHandler}
        placeholder={placeholderText}>
      </input>
    </div>
  )
}

export default Input;