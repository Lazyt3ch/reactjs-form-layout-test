import React from 'react';
import "./Select.css";

function Select(props) {
    const {onChangeHandler} = props;
    const {labelText, options, selectId } = props.data;
  
    return (
      <div className="registration-form-input margin-left margin-top">
        <label htmlFor={selectId}>
          {labelText}
        </label>
  
        <select id={selectId}
            onChange={onChangeHandler}

        >
            {options.map((o, idx) => (idx === 0 
                ? <option key={o} selected={true} disabled={true}>{o}</option>
                : <option key={o}>{o}</option>))
            }
        </select>
      </div>
    )
  }
  
  export default Select;