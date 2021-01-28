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
      <label htmlFor={selectId}>
        {labelText}
      </label>

      <select id={selectId} value={language}
        onChange={handleChange}
      >
        {extendedOptions.map((o, idx) => 
          <option key={o} style={getOptionStyles(idx)}>{o}</option>)}
      </select>
    </div>
  )
}
  
export default Dropdown;