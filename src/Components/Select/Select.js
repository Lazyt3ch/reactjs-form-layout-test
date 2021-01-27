import React from 'react';
import "./Select.css";

function Select(props) {
    const {invalidMessage, onChangeHandler} = props;
    const {labelText, defaultText, options, selectId } = props.data;
  
    return (
      <div className="registration-form-input margin-left margin-top">
        <label htmlFor={selectId}>
          {labelText}
        </label>
  
        <select id={selectId}
            onChange={onChangeHandler}

        >
            {options.map((o) => <option key={o} >{o}</option>)}
        </select>
  
        <div className="invalid-message">
          {/* TODO: Add message here */}
          {invalidMessage}
        </div>
      </div>
    )
  }
  
  export default Select;