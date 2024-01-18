import React from 'react';
import './Button.css';

export default function Button({type = 'button', size = '', theme = '', isInverted = false, label, handleClick}) {
	const setClassname = () => {
		let className = 'btn';
		if (size) {
			className += ` btn--${size}`;
		}
		if (theme) {
			className += ` btn--${theme}`;
		}
		if (isInverted) {
			className += ` btn--inverted`;
		}
		return className;
	};
	return (
		<button
			type={type}
			onClick={handleClick}
			className={setClassname()}>
			{label}
		</button>
	);
}
