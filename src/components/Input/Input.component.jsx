import React from "react";
import './input.styles.css';

const Input = ({type, value, name, onTextChange, placeholder, disabled, children}) => {
    return (
        <div className='inputContainer'>
            <input name={name} disabled={disabled} type={type} value={value} onChange={onTextChange} placeholder={placeholder}/>
            {children}
        </div>
    )
}

export default Input;
