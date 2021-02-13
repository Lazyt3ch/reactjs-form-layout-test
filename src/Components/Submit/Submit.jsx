import React, {useState} from 'react';
import "./Submit.css";

function Submit(props) {
  const {isSubmitReady, handleSubmit, tabIndex} = props;     

  const [isPressed, setIsPressed] = useState(false);

  // Workaround, mostly for this 20-years-old Firefox bug: 
  // https://bugzilla.mozilla.org/show_bug.cgi?id=68851
  const handleKeyDown = (e) => { 
    // e.preventDefault();   
    if (!isPressed && (e.keyCode === 32 || e.keyCode === 13)) { // Space or Enter      
      setIsPressed(true);
      handleSubmit();      
    }
  };

  const handleMouseDown = (e) => {
    // e.preventDefault();   
    if (!isPressed) {       
      setIsPressed(true);
      handleSubmit();      
    }
  };

  const handleKeyUp = (e) => {
    // e.preventDefault();
    if (isPressed) {
      setIsPressed(false);
    }
  };

  const handleMouseUp = (e) => {
    // e.preventDefault();
    if (isPressed) {
      setIsPressed(false);
    }
  };

  // const handleClick = (e) => {
  //   e.preventDefault();
  // };
  
  return (
    <div className="registration-form__submit__wrapper">
      <div className="registration-form__submit__base registration-form_margin-left">
        <div  
          className={`registration-form__submit  
          ${isPressed ? "registration-form__submit_pressed" : ""}`}
          disabled={!isSubmitReady}
          // onClick={handleClick}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onKeyUp={handleKeyUp}
          onKeyDown={handleKeyDown}          
          tabIndex={tabIndex}
        >
          Зарегистрироваться
        </div>
      </div>
    </div>
  );
}

export default Submit;