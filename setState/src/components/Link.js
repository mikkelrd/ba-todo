import React from 'react';

const Link = ({active, children, filter, onLinkClick}) => {
	if (active) {
		return <span>{children}</span>;
	}

	return (
		<a href="#"
		onClick={e => {
		e.preventDefault();
		onLinkClick(filter);
		}}
		>
			{children}
		</a>
	);
}

export default Link;
