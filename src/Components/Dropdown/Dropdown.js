import React from 'react';
import "./Dropdown.css";

function Dropdown(props) {
  const {
    // eslint-disable-next-line
    selectId, 
    labelText, 
    initialValue, 
    languages, 
    // eslint-disable-next-line
    language, 
    setLanguage, 
  } = props.data;

  // eslint-disable-next-line
  let extendedOptions = [initialValue, ...languages];

  // eslint-disable-next-line
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
        <div>
          {initialValue}
        </div>

        <div>
          <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="-7" y="-11" width="30" height="30" fill="#0880AE"/>
          </svg>
        </div>
      </div>
    </div>
  )
}
  
export default Dropdown;