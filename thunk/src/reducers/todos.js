import {ADD_TODO, ADD_TODO_BATCH, TOGGLE_TODO} from '../constants';

const todo = (state, {type, payload}) => {
	switch (type) {
		case ADD_TODO:
			return {
				id: payload.id,
				text: payload.text,
				completed: false,
			};
		case TOGGLE_TODO:
			if (state.id !== payload.id) {
				return state;
			}
			return {...state, completed: !state.completed};
		default:
			return state;
	}
};

const todos = (state = [], action) => {
	switch (action.type) {
		case ADD_TODO:
			return [...state, todo(undefined, action)];
		case ADD_TODO_BATCH:
			return [...state, ...action.payload.map(t => todo(undefined, {type: ADD_TODO, payload: t}))];
		case TOGGLE_TODO:
			return state.map(t => todo(t, action));
		default:
			return state;
	}
};

export default todos;
