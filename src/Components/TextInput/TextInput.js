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

  const getInputFieldStyles = () => 
    `registration-form__input__field ${isFocus
      ? "registration-form__input__field_focus"
      : "registration-form__input__field_no-focus"
    }`;

  function onChangeHandler(event) {
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
    <div className="registration-form__input registration-form_margin-left">
      <label htmlFor={inputId}>
        {labelText}
      </label>

      <input type="text" className={getInputFieldStyles()}
        onChange={onChangeHandler}
        onFocus={() => setIsFocus(true) }
        onBlur={() => setIsFocus(false) }
        placeholder={placeholderText}
        id={inputId}
        tabIndex={tabIndex}
      />

      <div className="registration-form__input__invalid-message">
        { isFilled && !isValid ? invalidMessage : "\u00A0" }
      </div>
    </div>
  )
}

export default TextInput;