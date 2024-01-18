import React from 'react';
import './Input.scss';

export default function Input({id, label, name, type = 'text', value, placeholder = '', inlineStyle, onChange}) {
	return (
		<div className="input-wrapper" style={inlineStyle}>
			<label className="input-label" htmlFor={id}>
				{label}
			</label>
			<input id={id} type={type} name={name} placeholder={placeholder} className="input-text" value={value} onChange={(e) => onChange(e)} />
		</div>
	);
}
