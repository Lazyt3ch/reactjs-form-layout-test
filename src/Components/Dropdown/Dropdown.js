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
  }
  
  return (
    <div className="registration-form-select margin-left margin-top">

    </div>
  )
}
  
export default Dropdown;