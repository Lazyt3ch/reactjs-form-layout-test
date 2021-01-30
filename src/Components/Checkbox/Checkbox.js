import React from 'react';
import "./Checkbox.css";

function Checkbox(props) {
  const {termsAccepted, setTermsAccepted} = props;     
  
  const getCheckboxClasses = () => 
    `registration-form-checkbox ${termsAccepted 
      ? "registration-form-checkbox-checked"
      : "registration-form-checkbox-unchecked"}`;
  
  return (
    <div className={getCheckboxClasses()}
      onClick={() => setTermsAccepted(prevState => !prevState)}
    >
      <svg className="tickmark" style={termsAccepted ? null : {display: "none"}}
        width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.6343 6.63431C18.9467 6.32189 19.4533 6.32189 19.7657 6.63431C20.0781 6.94673 20.0781 7.45326 19.7657 7.76568L10.1657 17.3657C9.85325 17.6781 9.34672 17.6781 9.0343 17.3657L5.0343 13.3657C4.72188 13.0533 4.72188 12.5467 5.0343 12.2343C5.34672 11.9219 5.85325 11.9219 6.16567 12.2343L9.59999 15.6686L18.6343 6.63431Z" fill="#0880AE" />
      </svg>
    </div>
  );
}

export default Checkbox;