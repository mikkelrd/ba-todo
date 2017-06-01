import React from 'react';
import {connect} from 'react-redux';
import {setVisibilityFilter} from '../actions';

const Link = ({active, children, onLinkClick}) => {
	if (active) {
		return <span>{children}</span>;
	}

	return (
		<a href="#"
		onClick={e => {
		e.preventDefault();
		onLinkClick();
		}}
		>
			{children}
		</a>
	);
}

export default connect(
	(state, ownProps) => ({active: ownProps.filter === state.visibilityFilter}),
	(dispatch, ownProps) => ({onLinkClick: () => dispatch(setVisibilityFilter(ownProps.filter))})
)(Link);
