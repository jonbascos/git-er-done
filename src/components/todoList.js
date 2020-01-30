import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function TodoList(props) {
	const todos = props.todoList.map((todo, id) => (
		<li className='todoItem' key={id} onClick={() => props.deleteTodo(id)}>
			{todo.value}
			<span className='deleteIcon' onClick={() => props.deleteTodo(id)}>
				{/* Have to pass in the id of the item you want to delete */}
				<FontAwesomeIcon icon={faTrashAlt} />
			</span>
		</li>
	));

	return (
		<div>
			<h3 className='todo-list-header'>Left to do:</h3>
			<hr />
			{props.todoList.length > 0 ? (
				<ul>{todos}</ul>
			) : (
				<h2>
					<em>List is empty</em>
				</h2>
			)}
		</div>
	);
}
export default TodoList;
