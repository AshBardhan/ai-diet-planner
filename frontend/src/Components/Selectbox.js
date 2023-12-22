import React from "react";
import './SelectBox.css';

export default function SelectBox({ id, label, name, value, options,inlineStyle, onChange }){
    return(
        <div className="input-wrapper" style={inlineStyle}>
            <label className="input-label" htmlFor={id}>{label}</label>
            {/* <SelectBox id={id} name={name} placeholder={placeholder} className="input-text" value={value} onChange={e => onChange(e)} /> */}
            <select name={name} id={id} value={value} onChange={e => onChange(e)}>
                {
                    options.map(option => (
                        <option value={option.value}>{option.label}</option>
                    ))
                }
            </select>
        </div>
    )
}