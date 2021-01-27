import React from 'react';
import "./Select.css";

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
  
  return (
    <div className="registration-form-select margin-left margin-top">
      <label htmlFor={selectId}>
        {labelText}
      </label>

      <select id={selectId} className="custom-select" value={language}
          onChange={() => setLanguage(language)}
      >
        {extendedOptions.map((o, idx) => 
          <option key={o} style={(idx === 0 ? {display: "none"} : null)}>{o}</option>)}
      </select>
    </div>
  )
}
  
export default Select;