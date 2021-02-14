import React from 'react';
import "./TextInput.css";
import validate from "../../utils/validators.js";

function TextInput(props) {
  const {
    labelText, 
    placeholderText, 
    inputId, 
    invalidMessage, 
    emptyMessage,
    tabIndex,
  } = props.data;

  const { textInputStates, setTextInputStates } = props;

  function onFocusHandler(event) {
    setTextInputStates({...textInputStates, 
      [inputId]: {
        isFilled: true,   // Dummy value!
        isValid: true,    // Dummy value!
        isFocused: true,  // Actual value
      }
    });    
  }

  function onBlurHandler(event) {
    const trimmedValue = event.target.value.trim();
    let isFilled, isValid;

    if (!trimmedValue.length) {
      isFilled = false;
      isValid = false;
    } else {
      isFilled = true;
      isValid = validate(trimmedValue, inputId);
    }

    setTextInputStates({...textInputStates, 
      [inputId]: {
        isFilled,
        isValid,
        isFocused: false,
      }
    });
  }

  const {isFilled, isValid, isFocused} = textInputStates[inputId];

  return (
    <div className="registration-form__input registration-form_margin-left">
      <label htmlFor={inputId}>
        {labelText}
      </label>

      <input type="text" 
        className="registration-form__input__field"
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
        placeholder={placeholderText}
        id={inputId}
        tabIndex={tabIndex}
      />

      <div className="registration-form__input__invalid-message">
        { !isFilled ? emptyMessage : !isValid ? invalidMessage : "\u00A0" }
      </div>
    </div>
  )
}

export default TextInput;