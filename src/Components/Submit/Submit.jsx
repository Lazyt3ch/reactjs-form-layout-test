import React, {useState} from 'react';
import "./Submit.css";

function Submit(props) {
  const {isSubmitReady, handleSubmit, tabIndex} = props;     

  const [isPressed, setIsPressed] = useState(false);

  // Workaround, mostly for this 20-years-old Firefox bug: 
  // https://bugzilla.mozilla.org/show_bug.cgi?id=68851
  const handleKeyDown = (e) => {
    if (!isPressed && (e.keyCode === 32 || e.keyCode === 13)) { // Space or Enter
      // console.log("Space or Enter");
      setIsPressed(true);
      handleSubmit();      
    }
  };

  const handleKeyUp = (e) => {
    if (isPressed) {
      setIsPressed(false);
    }
  }
  
  return (
    <div className="registration-form__submit__wrapper">
      <button type="button" 
        className="registration-form__submit registration-form_margin-left"
        style={isPressed ? { left: "2px", top: "2px" } : null}
        disabled={!isSubmitReady}
        onClick={handleSubmit}
        onKeyUp={handleKeyUp}
        onKeyDown={handleKeyDown}
        tabIndex={tabIndex}
      >
        Зарегистрироваться
      </button>
    </div>
  );
}

export default Submit;