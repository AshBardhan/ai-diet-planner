import React from 'react';
import './Button.scss';

export default function Button({type = 'button', size = '', theme = '', isInverted = false, label, handleClick}) {
	const setClassname = () => {
		let className = 'btn';
		className += size ? ` btn--${size}` : '';
		className += theme ? ` btn--${theme}` : '';
		className += isInverted ? ` btn--inverted` : '';
		return className;
	};
	return (
		<button type={type} onClick={handleClick} className={setClassname()}>
			{label}
		</button>
	);
}
