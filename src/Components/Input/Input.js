import React from 'react';
import "./Input.css";

function Input(props) {
  const {labelText, placeholderText, onChangeHandler} = props;

  return (
    <div className="registration-form-input">
      <label>
        {labelText}
        <input type="text" 
          onChange={onChangeHandler}
          placeholder={placeholderText}>
        </input>
      </label>
    </div>
  )
}

export default Input;