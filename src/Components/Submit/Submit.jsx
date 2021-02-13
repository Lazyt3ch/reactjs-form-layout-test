import React from 'react';
import "./Submit.css";

function Submit(props) {
  const {isSubmitReady, handleSubmit, tabIndex} = props;     
  
  return (
    <button type="button" 
      className="registration-form__submit registration-form_margin-left"
      disabled={!isSubmitReady}
      onClick={handleSubmit}
      tabIndex={tabIndex}
    >
      Зарегистрироваться
    </button>
  );
}

export default Submit;