import React from "react";
import './teaxtarea.styles.css';

const Textarea = ({text, onTextareaChange}) => (
    <textarea value={text} onChange={onTextareaChange} name="" id="" cols="30" rows="10"/>
)

export default Textarea;
