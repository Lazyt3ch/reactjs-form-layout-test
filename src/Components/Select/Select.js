import React, {useState} from 'react';
import "./Select.css";

function Select(props) {
    const {onChangeHandler} = props;
    const {labelText, initialValue, options, selectId } = props.data;

    const [value, setValue] = useState(initialValue);
  
    return (
      <div className="registration-form-select margin-left margin-top">
        <label htmlFor={selectId}>
          {labelText}
        </label>
  
        <select id={selectId} className="custom-select" value={value}
            onChange={onChangeHandler}
        >
            {/* options.map((o, idx) => (idx === 0 
                ? <option key={o} selected={true} disabled={true}>{o}</option>
                : <option key={o}>{o}</option>))
            */}
            {options.map((o, idx) => <option key={o}>{o}</option>)}
        </select>
      </div>
    )
  }
  
  export default Select;