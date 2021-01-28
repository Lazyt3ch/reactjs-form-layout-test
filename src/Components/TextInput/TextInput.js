import React, {useState} from 'react';
import "./TextInput.css";
import validate from "../../utils/validators.js";

function TextInput(props) {
  const {
    labelText, 
    placeholderText, 
    inputId, 
    invalidMessage, 
    tabIndex,
  } = props.data;

  const { textInputStates, setTextInputStates } = props;

  const [isFocus, setIsFocus] = useState(false);

  // "Focused" border color works fine in Firefox, but not in Chrome-like Vivaldi
  const getInputFieldStyles = () => 
    `registration-form-input-field ${isFocus
      ? "registration-form-input-field-focus"
      : "registration-form-input-field-no-focus"
    }`;

  function onChangeHandler(event) {
    console.log("tabIndex =", tabIndex);
    const trimmedValue = event.target.value.trim();
    let isFilled, isValid;

    if (!trimmedValue.length) {
      isFilled = false;
      isValid = true;
    } else {
      isFilled = true;
      isValid = validate(trimmedValue, inputId);
    }

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

      <input type="text" className={getInputFieldStyles()}
        onChange={onChangeHandler}
        // onFocus={() => { setIsFocus(true); console.log("focus") } }
        // onBlur={() => { setIsFocus(false); console.log("blur") } }
        onFocus={() => setIsFocus(true) }
        onBlur={() => setIsFocus(false) }
        placeholder={placeholderText}
        id={inputId}
        tabIndex={tabIndex}
      />

      <div className="invalid-message">
        { isFilled && !isValid ? invalidMessage : "\u00A0" }
      </div>
    </div>
  )
}

export default TextInput;