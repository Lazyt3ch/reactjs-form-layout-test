import React from 'react';
import "./Submit.css";

function Submit(props) {
  const {isSubmitReady, handleSubmit, tabIndex} = props;     

  const handleKeyUp = (e) => {
    if (e.keyCode === 32 || e.keyCode === 13) { // Space or Enter
      // console.log("Space or Enter");
      handleSubmit();
    }
  }
  
  return (
    <button type="button" 
      className="registration-form__submit registration-form_margin-left"
      disabled={!isSubmitReady}
      onClick={handleSubmit}
      onKeyUp={handleKeyUp}
      tabIndex={tabIndex}
    >
      Зарегистрироваться
    </button>
  );
}

export default Submit;