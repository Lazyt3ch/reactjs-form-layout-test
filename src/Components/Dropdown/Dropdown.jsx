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

  const handleKeyUp = (e) => {
    if (e.shiftKey && e.keyCode === 9) {
      console.log("shift tab");
      setIsDropdownOpen(false);
      return;
    }

    if (e.keyCode === 9) {
      console.log("tab");
      setIsDropdownOpen(false);
      return;
    }

    // switch (e.code) {
    //   case "Tab":
    //     if (isDropdownOpen) {
    //       setIsDropdownOpen(false);
    //     }
    //     break;
    //   case "Space":
    //     toggleDropdown();
    //     break;
    //   default:
    //     break;
    // }
  };

  const handleOptionKeyUp = (e) => {
    switch (e.code) {
      default:
        break;
    }
  };

  const toggleDropdown = (e) => {
    setIsDropdownOpen(prevState => !prevState);    
  };

  return (
    <div className="registration-form__dropdown registration-form_margin-left">
      <div className="registration-form__dropdown__label">
        {labelText}
      </div>      

      <div className="registration-form__dropdown__box"
        style={{ border: getDropdownBoxBorder() }}
        onClick={toggleDropdown}      
        onKeyUp={handleKeyUp}
        tabIndex={4}
      >
        <div className="registration-form__dropdown__box__content"
          style={{ color: getDropdownBoxFontColor() }}          
        >
          {language || initialValue}          
        </div>

        <div className="registration-form__dropdown__button">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 17.5858L21.2929 11.2929C21.6834 10.9024 22.3166 10.9024 22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929C7.68342 10.9024 8.31658 10.9024 8.70711 11.2929L15 17.5858Z" fill="#0880AE"/>
          </svg>
        </div>
      </div>

      <div className="registration-form__dropdown__list"
        style={{display: (isDropdownOpen ? "block" : "none")}}
        onKeyUp={handleOptionKeyUp}
      >
        {languages.map( (lang) => (
          <div className="registration-form__dropdown__list__option"
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