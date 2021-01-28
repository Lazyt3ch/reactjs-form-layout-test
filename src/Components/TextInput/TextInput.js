import React from 'react';
import "./TextInput.css";
import validate from "../../utils/validators.js";

function TextInput(props) {
  const {
    labelText, 
    placeholderText, 
    inputId, 
    invalidMessage, 
    // onChangeHandler,
  } = props.data;

  // const { isValid, isFilled } = props.states;

  const { textInputStates, setTextInputStates } = props;

  function onChangeHandler(event) {
    const {value, id} = event.target;
    const trimmedValue = value.trim();
    // if (!trimmedValue.length) {
    //   setTextInputStates({...})
    // }

    return validate(value, id);
  }

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
        { isValid || isFilled ? "" : invalidMessage }
      </div>
    </div>
  )
}

export default TextInput;