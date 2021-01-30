import React, {useState} from 'react';
import "./Dropdown.css";

function Dropdown(props) {
  const {
    labelText, 
    initialValue, 
    languages, 
    language, 
    setLanguage, 
  } = props.data;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const getDropdownBoxFontColor = () => {
    return (!isDropdownOpen && language === "") 
      ? "#7C9CBF"
      : "#2C2738";
  }

  const getDropdownBoxBorder = () => {
    return isDropdownOpen
      ? "2px solid #0880AE"
      : "1px solid #DBE2EA";
  }  

  const handleOptionClick = (e) => {
    setLanguage(e.target.innerHTML);
    setIsDropdownOpen(false);
  };

  const openDropdown = (e) => {
    setIsDropdownOpen(prevState => !prevState);    
  };

  return (
    <div className="registration-form-dropdown margin-left">
      <div className="registration-form-dropdown-label">
        {labelText}
      </div>      

      <div className="registration-form-dropdown-box"
        style={{ color: getDropdownBoxFontColor(), border: getDropdownBoxBorder() }}
        onClick={openDropdown}
      >
        <div>
          {language || initialValue}
        </div>

        <div className="registration-form-dropdown-button">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 17.5858L21.2929 11.2929C21.6834 10.9024 22.3166 10.9024 22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929C7.68342 10.9024 8.31658 10.9024 8.70711 11.2929L15 17.5858Z" fill="#0880AE"/>
          </svg>
        </div>
      </div>

      <div className="registration-form-dropdown-list"
        style={{display: (isDropdownOpen ? "block" : "none")}}
      >
        {languages.map( (lang) => (
          <div className="registration-form-dropdown-option"
            key={lang}
            onClick={handleOptionClick}
          >
            {lang}
          </div>
        ) )}
      </div>
    </div>
  )
}
  
export default Dropdown;