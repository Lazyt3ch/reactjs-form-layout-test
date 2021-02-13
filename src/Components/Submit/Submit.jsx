import React from 'react';
import "./Submit.css";

function Submit(props) {
  const {isSubmitReady, handleSubmit} = props;     
  
  return (
    <button type="button" 
      className="registration-form__submit registration-form_margin-left"
      disabled={!isSubmitReady}
      onClick={handleSubmit}
      tabIndex={6}
    >
      Зарегистрироваться
    </button>
  );
}

export default Submit;