import React from 'react';
import "./Submit.css";

function Submit(props) {
  const {termsAccepted} = props;     
  
  const getSubmitClasses = () => 
    `registration-form-submit margin-left ${termsAccepted 
      ? "registration-form-submit-enabled"
      : "registration-form-checkbox-disabled"}`;
  
  return (
    <div className={getSubmitClasses()}>
        Зарегистрироваться
    </div>
  );
}

export default Submit;