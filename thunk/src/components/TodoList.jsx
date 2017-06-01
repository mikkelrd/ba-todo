import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} from '../constants';
import {toggleTodo, fetchList} from '../actions';
import Todo from './Todo';

function filterTodos(list, filter) {
	switch (filter) {
	  case SHOW_ALL:
		return list
	  case SHOW_ACTIVE:
		return list.filter(t => !t.completed)
	  case SHOW_COMPLETED:
		return list.filter(t => t.completed)
	  default:
		throw new Error(`Unknown filter: ${filter}`)
	}
}

class TodoList extends Component {
	componentDidMount() {
		this.props.dispatch(fetchList());
	}

	render() {
		return this.props.loading
			? (<div className="spinner"></div>)
			: (
				<ul>
				{this.props.todos.map(todo =>
					<Todo
					key={todo.id}
					{...todo}
					onClick={() => this.props.dispatch(toggleTodo(todo.id))}
					/>
				)}
				</ul>
			);
	}
}

export default connect(
	state => ({
		todos: filterTodos(state.todos, state.visibilityFilter),
		loading: state.loading,
	})
)(TodoList);
