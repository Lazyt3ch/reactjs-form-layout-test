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
      <div>
        {labelText}
      </div>      

      <div className="registration-form-dropdown-box"
        onClick={openDropdown}
      >
        {initialValue}
      </div>
    </div>
  )
}
  
export default Dropdown;