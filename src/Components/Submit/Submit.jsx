import React, {useState} from 'react';
import "./Submit.css";

function Submit(props) {
  const {isSubmitReady, handleSubmit, tabIndex} = props;     

  const [isPressed, setIsPressed] = useState(false);

  // Workaround, mostly for this 20-years-old Firefox bug: 
  // https://bugzilla.mozilla.org/show_bug.cgi?id=68851
  const handleKeyDown = (e) => { 
    if (!isPressed && (e.keyCode === 32 || e.keyCode === 13)) { // Space or Enter      
      setIsPressed(true);
      handleSubmit();      
    }
  };

  const handleMouseDown = (e) => {
    if (!isPressed) {       
      setIsPressed(true);
      handleSubmit();      
    }
  };

  const handleKeyUp = (e) => {
    if (isPressed) {
      setIsPressed(false);
    }
  };

  const handleMouseUp = (e) => {
    if (isPressed) {
      setIsPressed(false);
    }
  };
  
  return (
    <div className="registration-form__submit__wrapper">
      <div className="registration-form__submit__base registration-form_margin-left">
        <input type="button"
          className={`registration-form__submit  
          ${isPressed ? "registration-form__submit_pressed" : ""}`}
          disabled={!isSubmitReady}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onKeyUp={handleKeyUp}
          onKeyDown={handleKeyDown}          
          tabIndex={tabIndex}
          value="Зарегистрироваться"
        />
      </div>
    </div>
  );
}

export default Submit;