import React from 'react';
import './Tile.scss';

export default function Tile({themes = [], isSelected = false, handleClick, children}) {
	const setClassname = () => {
		let className = 'tile';
		className += themes ? ` ${themes.map((theme) => `tile--${theme}`).join(' ')}` : '';
		className += isSelected ? ' selected' : '';
		return className;
	};
	return (
		<div className={setClassname()} onClick={handleClick}>
			{children}
		</div>
	);
}
