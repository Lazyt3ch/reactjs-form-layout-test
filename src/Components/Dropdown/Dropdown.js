import React from 'react';
import "./Dropdown.css";

function Dropdown(props) {
  const {
    selectId, 
    labelText, 
    initialValue, 
    languages, 
    language, 
    setLanguage, 
  } = props.data;

  let extendedOptions = [initialValue, ...languages];

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  const openDropdown = (e) => {
    console.log("dropdown opening");
  };

  // Custom dropdown example: https://www.w3schools.com/howto/howto_js_dropdown.asp
  
  return (
    <div className="registration-form-dropdown margin-left margin-top">
      <div className="registration-form-dropdown-label">
        {labelText}
      </div>      

      <div className="registration-form-dropdown-box"
        onClick={openDropdown}
      >
        <span>
          {initialValue}
        </span>

        <span>
          <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="-7" y="-11" width="30" height="30" fill="#0880AE"/>
          </svg>
        </span>
      </div>
    </div>
  )
}
  
export default Dropdown;