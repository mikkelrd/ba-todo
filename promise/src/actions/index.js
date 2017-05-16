import {
	ADD_TODO,
	ADD_TODO_BATCH,
	TOGGLE_TODO,
	SET_VISIBILITY_FILTER,
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

export const fetchList = () => ({
	type: ADD_TODO_BATCH,
	payload: fetch(`http://swapi.co/api/films/`)
		.then(response => response.json())
		.then(json => json.results.map(film => ({id: film.episode_id, text: film.title})))
});
