import React from 'react';
import './BlockList.css';

export default function BlockList({themes = [], list}) {
	const setClassname = () => {
		let className = 'block-list';
		if (themes) {
			className += ` ${themes.map((theme) => `block-list--${theme}`).join(' ')}`;
		}
		return className;
	};
	return (
		<ul className={setClassname()}>
			{list.map((listItem) => (
				<li>{listItem}</li>
			))}
		</ul>
	);
}
