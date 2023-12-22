import React from "react";
import './Tile.css';

export default function Tile({ themes = [], isSelected = false, handleClick, children}){
    const setClassname = () => {
        let className = 'tile';
        if(themes) {
            className += ` ${themes.map(theme => `tile--${theme}`).join(' ')}`;
        }
        if(isSelected) {
            className += ' selected';
        }
        return className;
    }
    return(
        <div className={setClassname()} onClick={handleClick}>{children}</div>
    )
}