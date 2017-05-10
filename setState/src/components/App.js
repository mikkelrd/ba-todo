import React, {Component} from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';
import {filterConstants} from '../constants';
import {DUMMY_DATA} from '../config';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: DUMMY_DATA,
			visibilityFilter: filterConstants.SHOW_ALL,
		};
		this.addTodo = this.addTodo.bind(this);
		this.toggleTodo = this.toggleTodo.bind(this);
		this.applyFilter = this.applyFilter.bind(this);
	}

	getVisibleTodos() {
		switch (this.state.visibilityFilter) {
		  case filterConstants.SHOW_ALL:
			return this.state.todos
		  case filterConstants.SHOW_ACTIVE:
			return this.state.todos.filter(t => !t.completed)
		  case filterConstants.SHOW_COMPLETED:
			return this.state.todos.filter(t => t.completed)
		  default:
			throw new Error('Unknown filter: ' + this.state.visibilityFilter)
		}
	}

	addTodo(newTodoText) {
		this.setState({
			todos: this.state.todos.concat([{
				id: Date.now(),
				text: newTodoText,
				completed: false,
			}]),
		});
	}

	toggleTodo(id) {
		this.setState({
			todos: this.state.todos.map(todo => {
				if (todo.id === id) {
					return {...todo, completed: !todo.completed};
				}
				return todo;
			}),
		});
	}

	applyFilter(filter) {
		this.setState({
			visibilityFilter: filter
		});
	}

	render() {
		const visibleTodos = this.getVisibleTodos();

		return (
			<div>
				<AddTodo onNewTodo={this.addTodo} />
				<TodoList todos={visibleTodos} onTodoClick={this.toggleTodo} />
				<Footer visibilityFilter={this.state.visibilityFilter} onFilterClick={this.applyFilter} />
			</div>
		);
	}
};

export default App;
