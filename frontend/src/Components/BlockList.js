import React from 'react';
import './BlockList.scss';

export default function BlockList({themes = [], list}) {
	const setClassname = () => {
		let className = 'block-list';
		className += themes ? ` ${themes.map((theme) => `block-list--${theme}`).join(' ')}` : '';
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
