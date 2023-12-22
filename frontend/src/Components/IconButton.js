import React from "react";
import './IconButton.css';

export default function IconButton({ type='button', theme='', isHoverable = false, children, handleClick }){
    const setClassname = () => {
        let className = 'icon-button';
        if(theme) {
            className += ` icon-button--${theme}`;
        }
        if(isHoverable) {
            className += ` icon-button--hoverable`;
        }
        return className;
    }
    return(
        <button type={type} onClick={handleClick} className={setClassname()}>{children}</button>
    )
}