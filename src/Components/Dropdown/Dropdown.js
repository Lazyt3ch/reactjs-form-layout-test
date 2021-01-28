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

        <div className="registration-form-dropdown-button">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 17.5858L21.2929 11.2929C21.6834 10.9024 22.3166 10.9024 22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929C7.68342 10.9024 8.31658 10.9024 8.70711 11.2929L15 17.5858Z" fill="#0880AE"/>
          </svg>
        </div>
      </div>

      <div class="registration-form-dropdown-list">
        {languages.map( (lang) => (
          <div className="registration-form-dropdown-option"
            key={lang}
          >
            {lang}
          </div>
        ) )}
      </div>
    </div>
  )
}
  
export default Dropdown;