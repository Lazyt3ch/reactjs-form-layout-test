import React from 'react';
// import React, {useState} from 'react';
import "./Select.css";

function Select(props) {
    const {onChangeHandler} = props;
    const {labelText, initialValue, options, selectId } = props.data;

    // const [value, setValue] = useState(initialValue);
    // let value = initialValue;
    // console.log("value =", value);

    let extendedOptions = [initialValue, ...options];
  
    return (
      <div className="registration-form-select margin-left margin-top">
        <label htmlFor={selectId}>
          {labelText}
        </label>
  
        <select id={selectId} className="custom-select" value={"SOMETHING"}
            onChange={onChangeHandler}
        >
          {extendedOptions.map((o, idx) => 
            <option key={o} style={(idx === 0 ? {display: "none"} : null)}>{o}</option>)}
        </select>
      </div>
    )
  }
  
  export default Select;