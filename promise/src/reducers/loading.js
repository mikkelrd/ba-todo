import {ADD_TODO_BATCH_PENDING, ADD_TODO_BATCH_FULFILLED} from '../constants';

const apiReducer = (state = false, {type}) => {
	switch (type) {
		case ADD_TODO_BATCH_PENDING:
			return true;
		case ADD_TODO_BATCH_FULFILLED:
			return false;
		default:
			return state;
	}
};

export default apiReducer;
