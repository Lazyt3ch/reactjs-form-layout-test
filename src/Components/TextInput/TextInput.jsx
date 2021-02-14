import React, {useState} from 'react';
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

  const {textInputStates, setTextInputStates} = props;

  const [isFocused, setIsFocused] = useState(false);
  const [isJustLoaded, setIsJustLoaded] = useState(true);

  function onBlurHandler(event) {
    setIsFocused(false);

    if (isJustLoaded) {
      setIsJustLoaded(false);
    }    

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

  const NBSP = "\u00A0";

  return (
    <div className="registration-form__input registration-form_margin-left">
      <label htmlFor={inputId}>
        {labelText}
      </label>

      <input type="text" 
        className="registration-form__input__field"
        onBlur={onBlurHandler}
        onFocus={() => setIsFocused(true)}
        placeholder={placeholderText}
        id={inputId}
        tabIndex={tabIndex}
      />

      <div className="registration-form__input__invalid-message">
        { (isJustLoaded || isFocused)
          ? NBSP 
          : !isFilled 
            ? emptyMessage 
            : !isValid 
              ? invalidMessage 
              : NBSP 
        }
      </div>
    </div>
  )
}

export default TextInput;