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
    const trimmedValue = event.target.value.trim();
    // console.log("trimmedValue =", trimmedValue);
    let isFilled, isValid;

    if (!trimmedValue.length) {
      isFilled = false;
      isValid = true;
    } else {
      isFilled = true;
      isValid = validate(trimmedValue, inputId);
    }
    // console.log("isFilled, isValid =", isFilled, isValid);

    setTextInputStates({...textInputStates, 
      [inputId]: {
        isFilled,
        isValid,
      }
    });
  }

  const {isFilled, isValid} = textInputStates[inputId];

  return (
    <div className="registration-form-input margin-left margin-top">
      <label htmlFor={inputId}>
        {labelText}
      </label>

      <input type="text" className="registration-form-input-field"
        onChange={onChangeHandler}
        placeholder={placeholderText}
        id={inputId}
      />

      <div className="invalid-message">
        { isFilled && !isValid ? invalidMessage : "\u00A0" }
      </div>
    </div>
  )
}

export default TextInput;