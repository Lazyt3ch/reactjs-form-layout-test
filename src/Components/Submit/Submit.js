import React from 'react';
import "./Submit.css";

function Submit(props) {
  const {isSubmitReady, handleSubmit} = props;     
  
  const getSubmitClasses = () => 
    `registration-form-submit margin-left ${isSubmitReady 
      ? "registration-form-submit-enabled"
      : "registration-form-submit-disabled"}`;
  
  return (
    <div className={getSubmitClasses()}
      onClick={handleSubmit}
    >
        Зарегистрироваться
    </div>
  );
}

export default Submit;