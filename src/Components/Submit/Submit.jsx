import React from 'react';
import "./Submit.css";

function Submit(props) {
  const {isSubmitReady, handleSubmit} = props;     
  
  const getSubmitClasses = () => 
    `registration-form__submit registration-form_margin-left ${isSubmitReady 
      ? "registration-form__submit_enabled"
      : "registration-form__submit_disabled"}`;
  
  return (
    <button type="button" className={getSubmitClasses()}
      disabled={!isSubmitReady}
      onClick={handleSubmit}
      tabIndex={6}
    >
      Зарегистрироваться
    </button>
  );
}

export default Submit;