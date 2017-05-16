import {
	ADD_TODO,
	ADD_TODO_BATCH,
	TOGGLE_TODO,
	SET_VISIBILITY_FILTER,
	FETCH_LIST_PENDING,
	FETCH_LIST_FULFILLED,
} from '../constants';

export const addTodo = (text) => ({
	type: ADD_TODO,
	payload: {
		id: Date.now(),
		text,
	},
});

export const addTodoBatch = (list) => ({
	type: ADD_TODO_BATCH,
	payload: list,
});

export const toggleTodo = (id) => ({
	type: TOGGLE_TODO,
	payload: {id},
});

export const setVisibilityFilter = (filter) => ({
	type: SET_VISIBILITY_FILTER,
	payload: {filter},
});

const fetchListPending = () => ({type: FETCH_LIST_PENDING});
const fetchListFulfilled = (list) => ({type: FETCH_LIST_FULFILLED});

export const fetchList = () => dispatch => {
	dispatch(fetchListPending());
	fetch(`http://swapi.co/api/films/`)
		.then(response => response.json())
		.then(json => {
			dispatch(addTodoBatch(json.results.map(film => ({id: film.episode_id, text: film.title}))));
			dispatch(fetchListFulfilled())
		});
};
