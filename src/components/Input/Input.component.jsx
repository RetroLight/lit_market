import React from "react";
import './input.styles.css';

const Input = ({type, ref, value, name, onTextChange, placeholder, disabled, children}) => {
    return (
        <div className='inputContainer'>
            <input ref={ref} name={name} disabled={disabled} type={type} value={value} onChange={onTextChange} placeholder={placeholder}/>
            {children}
        </div>
    )
}

export default Input;
