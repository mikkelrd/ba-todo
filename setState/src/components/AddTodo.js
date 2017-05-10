import React from 'react';

let input;
const AddTodo = ({onNewTodo}) => (
	<div>
		<form onSubmit={e => {
			e.preventDefault()
			if (!input.value.trim()) {
				return;
			}
			onNewTodo(input.value);
			input.value = '';
		}}>
			<input ref={node => {
				input = node;
			}} />
			<button type="submit">
				Add Todo
			</button>
		</form>
	</div>
);

export default AddTodo;
