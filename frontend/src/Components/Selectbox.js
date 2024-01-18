import React from 'react';
import './SelectBox.scss';

export default function SelectBox({id, label, name, value, options, inlineStyle, onChange}) {
	return (
		<div className="input-wrapper" style={inlineStyle}>
			<label className="input-label" htmlFor={id}>
				{label}
			</label>
			<select name={name} id={id} value={value} onChange={(e) => onChange(e)}>
				{options.map((option) => (
					<option value={option.value}>{option.label}</option>
				))}
			</select>
		</div>
	);
}
