import React, {useState, useRef, useEffect} from 'react';
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
  const [isDropdownFocused, setIsDropdownFocused] = useState(false);
  const numLangs = languages.length; 
  const [langIndex, setLangIndex] = useState(-1);
  const [isHovered, setIsHovered] = useState(false);
  const dropdownBox = useRef(null);
  const dropdownList = useRef(null);

  const handleOnHover = () => {
    setIsHovered(true);
  }

  const handleOnHoverOff = () => {
    setIsHovered(false);
  }

  const getDropdownBoxFontColor = () => {
    return (!isDropdownOpen && language === "") 
      ? "#7C9CBF"
      : "#2C2738";
  }

  const getDropdownBoxBorder = () => {
    return (isDropdownOpen || isDropdownFocused)
      ? "2px solid #0880AE"
      : "1px solid #DBE2EA";
  }  

  const handleOptionClick = (e) => {
    const selectedLanguage = e.target.innerHTML;
    setLanguage(selectedLanguage);
    setLangIndex(languages.indexOf(selectedLanguage));
    setIsDropdownOpen(false);
    setIsDropdownFocused(true);
    dropdownBox.current.focus();
  };

  const handleKeyDown = (e) => { 
    // console.log("e.keyCode =", e.keyCode);

    if (e.shiftKey && e.keyCode === 9) { // Shift + Tab
      if (isDropdownOpen) {
        e.preventDefault(); // Prevent switching to the control above
        setIsDropdownOpen(false);
      }
      return;
    }

    if (e.keyCode === 9) { // Tab
      if (isDropdownOpen) {
        e.preventDefault(); // Prevent switching to the control below
        setIsDropdownOpen(false);
      }
      return;
    }

    if (e.keyCode === 32) { // Space
      if (!isDropdownOpen) {
        setIsDropdownOpen(true);
      }
      return;
    }

    if (e.keyCode === 40) { // Arrow Down
      if (langIndex < numLangs - 1) {
        setLangIndex(prevLangIndex => prevLangIndex + 1);
      }
      return;
    }

    if (e.keyCode === 38) { // Arrow Up
      if (langIndex > 0) {
        setLangIndex(prevLangIndex => prevLangIndex - 1)
      }
      return;
    }    

    if (e.keyCode === 27) { // Esc
      setIsDropdownOpen(false);
      return;
    }

    if (e.keyCode === 13) { // Enter
      setIsDropdownOpen(false);
      setLanguage(languages[langIndex]);
      return;
    }    

  };

  const toggleDropdown = (e) => {
    setIsDropdownOpen(prevState => !prevState);    
  };

  useEffect(
    () => {
      if (isDropdownOpen) {
        const handleClickOutside = (e) => {
          if ( !dropdownList.current.contains(e.target) ) {
            setIsDropdownOpen(false);
            document.removeEventListener("click", handleClickOutside);
          }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
      }
    },
    [isDropdownOpen]
  );

  return (
    <div className="registration-form__dropdown registration-form_margin-left">
      <div className="registration-form__dropdown__label">
        {labelText}
      </div>      

      <div className="registration-form__dropdown__box"
        style={{ border: getDropdownBoxBorder() }}
        onClick={toggleDropdown}      
        onKeyDown={handleKeyDown}
        onFocus={() => setIsDropdownFocused(true)}
        onBlur={() => setIsDropdownFocused(false)}
        tabIndex={4}
        ref={dropdownBox}
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
        onMouseLeave={handleOnHoverOff}
        ref={dropdownList}
      >
        {languages.map( (lang, idx) => (
          <div className={`registration-form__dropdown__list__option
            ${idx === langIndex && !isHovered ? "registration-form__dropdown__list__option_selected" : ""}`}
            key={lang}
            onClick={handleOptionClick}
            onMouseEnter={handleOnHover}
          >
            {lang}
          </div>
        ) )}
      </div>
    </div>
  )
}
  
export default Dropdown;