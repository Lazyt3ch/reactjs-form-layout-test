import React from 'react';
import "./Submit.css";

function Submit(props) {
  const {isSubmitReady, handleSubmit} = props;     
  
  const getSubmitClasses = () => 
    `registration-form-submit margin-left ${isSubmitReady 
      ? "registration-form-submit-enabled"
      : "registration-form-submit-disabled"}`;
  
  return (
    <button type="button" className={getSubmitClasses()}
      disabled={!isSubmitReady}
      onClick={handleSubmit}
    >
      Зарегистрироваться
    </button>
  );
}

export default Submit;