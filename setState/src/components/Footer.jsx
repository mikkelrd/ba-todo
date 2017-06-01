import React from 'react';
import Link from './Link';
import {todoConstants} from '../constants';

const links = [
	{
		text: ' All, ',
		filter: todoConstants.SHOW_ALL,
	},
	{
		text: 'Active, ',
		filter: todoConstants.SHOW_ACTIVE,
	},
	{
		text: 'Completed',
		filter: todoConstants.SHOW_COMPLETED,
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
