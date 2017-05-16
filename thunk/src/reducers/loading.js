import {FETCH_LIST_PENDING, FETCH_LIST_FULFILLED} from '../constants';

const loadingReducer = (state = false, {type}) => {
	switch (type) {
		case FETCH_LIST_PENDING:
			return true;
		case FETCH_LIST_FULFILLED:
			return false;
		default:
			return state;
	}
};

export default loadingReducer;
