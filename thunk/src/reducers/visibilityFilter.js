import {SHOW_ALL, SET_VISIBILITY_FILTER} from '../constants';

const visibilityFilter = (state = SHOW_ALL, {type, payload}) => {
	switch (type) {
		case SET_VISIBILITY_FILTER:
			return payload.filter;
		default:
			return state;
	}
};

export default visibilityFilter;
