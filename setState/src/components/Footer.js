import React from 'react';
import Link from './Link';
import {filterConstants} from '../constants';

const links = [
	{
		text: ' All, ',
		filter: filterConstants.SHOW_ALL,
	},
	{
		text: 'Active, ',
		filter: filterConstants.SHOW_ACTIVE,
	},
	{
		text: 'Completed',
		filter: filterConstants.SHOW_COMPLETED,
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
