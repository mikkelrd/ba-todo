import React from 'react';
import Link from './Link';
import {SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} from '../constants';

const links = [
	{
		text: ' All, ',
		filter: SHOW_ALL,
	},
	{
		text: 'Active, ',
		filter: SHOW_ACTIVE,
	},
	{
		text: 'Completed',
		filter: SHOW_COMPLETED,
	},
];

const Footer = ({visibilityFilter, onFilterClick}) => (
	<p>
		Show:
		{links.map((link, i) => (
			<Link key={i} filter={link.filter} active={visibilityFilter === link.filter}
			onLinkClick={onFilterClick}>
				{link.text}
			</Link>
		))}
	</p>
)

export default Footer
