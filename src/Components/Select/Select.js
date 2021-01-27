import React from 'react';
import "./Select.css";

function getOptionStyles(idx) {
  return (idx === 0)
    ? ({ display: "none" })
    : ({ height: "40px" });
}

function Select(props) {
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
  
export default Select;