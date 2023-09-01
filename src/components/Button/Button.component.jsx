import React from "react";
import './button.styles.css';

const Button = ({title, clickHandler, type}) => {
    return (
        <div className='buttonContainer'>
            <button type={type} onClick={clickHandler}>{title}</button>
        </div>
    )
}

export default Button;
