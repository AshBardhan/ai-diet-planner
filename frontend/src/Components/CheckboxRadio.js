import React from 'react';
import './CheckboxRadio.scss';

export default function CheckboxRadio({id, type, label, value, name = '', checked, onChange}) {
	return (
		<div className="checkbox-radio">
			<input id={id} type={type} name={name} checked={checked} value={value} onChange={(e) => onChange(e)} />
			<label className="checkbox-radio-label" htmlFor={id}>
				<span>{label}</span>
				{type === 'checkbox' && (
					<span className="checkbox-radio-button">
						<svg width="20" height="20" viewBox="0 0 32 32" className="checkbox-radio-icon checkbox-radio-icon--selected">
							<path fill="currentColor" d="M2.688 0C1.184 0 0 1.184 0 2.656v26.688C0 30.816 1.184 32 2.688 32h26.656C30.816 32 32 30.816 32 29.344V2.656C32 1.184 30.816 0 29.344 0H2.688z" />
							<path fill="#fff" d="M4.64 17.984c-.352-.352-.352-.96 0-1.312l2.336-2.4c.352-.352.928-.352 1.312 0l3.776 3.84c.352.384.96.384 1.312 0l10.368-10.56c.352-.384.928-.384 1.312 0l2.304 2.336c.352.352.384.96 0 1.344L14.816 24.064c-.352.352-1.088.672-1.6.672h-1.088c-.512 0-1.216-.32-1.568-.672l-5.92-6.08z" />
						</svg>
						<svg width="20" height="20" viewBox="0 0 32 32" className="checkbox-radio-icon checkbox-radio-icon--default">
							<path d="M28 1H4a3 3 0 00-3 3v24a3 3 0 003 3h24a3 3 0 003-3V4a3 3 0 00-3-3z" stroke="currentColor" strokeWidth="2" fill="#fff" />
						</svg>
					</span>
				)}
				{type === 'radio' && (
					<span className="checkbox-radio-button">
						<svg width="20" height="20" viewBox="0 0 32 32" className="checkbox-radio-icon checkbox-radio-icon--selected">
							<circle cx="16" cy="16" r="14" fill="#fff" stroke="currentColor" strokeWidth="4" />
							<circle cx="16" cy="16" r="8" fill="currentColor" />
						</svg>
						<svg width="20" height="20" viewBox="0 0 32 32" className="checkbox-radio-icon checkbox-radio-icon--default">
							<circle cx="16" cy="16" r="15" fill="#fff" stroke="currentColor" strokeWidth="2" />
						</svg>
					</span>
				)}
			</label>
		</div>
	);
}
